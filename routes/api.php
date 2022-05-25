<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    // Users routes.
    Route::get('/users', [\App\Http\Controllers\UserController::class, 'getAllUsers']);
    Route::get('/users/{user}/edit', [\App\Http\Controllers\UserController::class, 'editUser']);
    Route::patch('/users/{user}', [\App\Http\Controllers\UserController::class, 'updateUser']);

    // Route for getting current user.
    Route::get('/user', [\App\Http\Controllers\UserController::class, 'getAuthenticatedUser']);

    // Appointments routes.
    Route::get('/appointments/admin', [\App\Http\Controllers\AppointmentsController::class, 'getAllAppointments']);
    Route::get('/appointments/client/available', [\App\Http\Controllers\AppointmentsController::class, 'getClientAvailableAppointments']);
    Route::get('/appointments/client/scheduled', [\App\Http\Controllers\AppointmentsController::class, 'getClientScheduledAppointments']);
    Route::get('/appointments/doctor', [\App\Http\Controllers\AppointmentsController::class, 'getDoctorAppointments']);
    Route::post('/appointments', [\App\Http\Controllers\AppointmentsController::class, 'storeAppointment']);
    Route::delete('/appointments/{appointment}', [\App\Http\Controllers\AppointmentsController::class, 'deleteAppointment']);
    Route::get('/appointments/{appointment}/edit', [\App\Http\Controllers\AppointmentsController::class, 'editAppointment']);
    Route::patch('/appointments/{appointment}', [\App\Http\Controllers\AppointmentsController::class, 'updateAppointment']);
    Route::patch('/appointments/{appointment}/subscribe', [\App\Http\Controllers\AppointmentsController::class, 'subscribeClient']);
    Route::patch('/appointments/{appointment}/unsubscribe', [\App\Http\Controllers\AppointmentsController::class, 'unsubscribeClient']);

});
