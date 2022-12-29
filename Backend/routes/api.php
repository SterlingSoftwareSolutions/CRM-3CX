<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserPhoneController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerAddressController;
use App\Http\Controllers\CallTypeController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\FeedbackController;
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

// User Phones
Route::get('user_phones/{userPhone}/user', [UserPhoneController::class, 'user']);
Route::resource('user_phones', UserPhoneController::class);

// Customers
Route::get('/customers/search/{name}',[CustomerController::class, 'search']);
Route::resource('customers', CustomerController::class);

// Customer Addresses
Route::resource('customer_addresses', CustomerAddressController::class);
Route::get('/customer_addresses/{customerAddress}/customer',[CustomerAddressController::class, 'customer']);

// Inquiries
Route::resource('inquiries', InquiryController::class);

// Call types
Route::resource('call_types', CallTypeController::class);

// Feedbacks
Route::resource('feedbacks', FeedbackController::class);
Route::get('/feedbacks/{feedback}/inquiry',[FeedbackController::class, 'inquiry']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum']], function() {
    // Logut
    Route::post('/logout', [AuthController::class, 'logout']);

});