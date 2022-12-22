<?php

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

// User Phones
Route::resource('user_phone', UserPhoneController::class);

// Customers
Route::resource('customer', CustomerController::class);
Route::get('/customer/search/{name}',[CustomerController::class, 'search']);

// Customer Addresses
Route::resource('customer_address', CustomerAddressController::class);
Route::get('/customer_address/{id}/customer',[CustomerAddressController::class, 'customer']);

// Call types
Route::resource('call_type', CallTypeController::class);

// Inquiries
Route::resource('inquiry', InquiryController::class);

// Feedbacks
Route::resource('feedback', FeedbackController::class);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
