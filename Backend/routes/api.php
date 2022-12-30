<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserPhoneController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerAddressController;
use App\Http\Controllers\CallTypeController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum']], function() {

    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::get('/token', function (Request $request) {
        $token = $request->session()->token();
        $token = csrf_token();
        return $token;
    });

    Route::group(['middleware' => 'agent'], function() {

        // Read Only
        Route::get('users/count', [UserController::class, 'count']);
        Route::get('users/agents', [UserController::class, 'index_agents']);
        Route::get('users/agents/{id}', [UserController::class, 'show_agent']);
        Route::resource('call_types', CallTypeController::class)->only(['index', 'show']);
        Route::get('/feedbacks/{feedback}/inquiry',[FeedbackController::class, 'inquiry']);
        Route::resource('feedbacks', FeedbackController::class)->only(['index', 'show']);;

        // Create/Read/Update
        Route::get('/customers/search/{name}',[CustomerController::class, 'search']);
        Route::resource('customers', CustomerController::class)->except(['destroy']);
        Route::get('/customer_addresses/{customerAddress}/customer',[CustomerAddressController::class, 'customer']);
        Route::resource('customer_addresses', CustomerAddressController::class)->except(['destroy']);

        // Create/Read/Update/Delete
        Route::get('inquiries/count', [InquiryController::class, 'count']);
        Route::resource('inquiries', InquiryController::class);

    });

    Route::group(['middleware' => 'admin'], function() {

        // Admins have access to all agent routes and
        // the following routes

        // Create/Read/Update/Delete
        Route::resource('users', UserController::class);
        Route::get('user_phones/{userPhone}/user', [UserPhoneController::class, 'user']);
        Route::resource('user_phones', UserPhoneController::class);
        
        // Create/Update/Delete
        Route::resource('feedbacks', FeedbackController::class)->except(['show']);
        Route::get('call_types/{callType}/inquiries', [CallTypeController::class, 'inquiries']);
        Route::resource('call_types', CallTypeController::class)->except(['index', 'show']);

        // Delete Only
        Route::resource('customers', CustomerController::class)->only(['destroy']);
        Route::resource('customer_addresses', CustomerAddressController::class)->only(['destroy']);

    });

});

