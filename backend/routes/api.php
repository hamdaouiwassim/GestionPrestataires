<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length');
header('Access-Control-Allow-Origin: *');
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/','UserController@index');
Route::post('/register','UserController@add');
Route::post('/edit/{id}','UserController@edit');
Route::post('/rdv/add','RDVController@add');
Route::post('/search','PrestataireController@search');
Route::post('/login','UserController@login');
Route::get('/getPrestataireById/{id}','PrestataireController@getPrestataireById');
Route::get('/user','UserController@user')->middleware('auth:api');
Route::get('/userData','UserController@userData')->middleware('auth:api');
Route::get('/prestataireGetAll','PrestataireController@prestataireGetAll')->middleware('auth:api');
Route::get('/patientGetAll','PrestataireController@patientGetAll')->middleware('auth:api');

Route::get('/prestataireByName/{name}','PrestataireController@prestataireByName')->middleware('auth:api');
Route::post('/editCurrentUser','UserController@editCurrentUser')->middleware('auth:api');
Route::get('/getRdvsByUser','UserController@getRdvsByUser')->middleware('auth:api');
Route::get('/getConsultationByUser','UserController@getConsultationByUser')->middleware('auth:api');
Route::get('/dashPrestataire','UserController@dashPrestataire')->middleware('auth:api');
Route::get('/rdvsPrestataire','UserController@rdvsPrestataire')->middleware('auth:api');
Route::get('/consultationsPrestataire','UserController@consultationsPrestataire')->middleware('auth:api');
Route::get('/patientsPrestataire','UserController@patientsPrestataire')->middleware('auth:api');
Route::post('/ValiderRDV/{id}','RdvController@ValiderRDV')->middleware('auth:api');
Route::get('/DeleteRDV/{id}','RdvController@DeleteRDV')->middleware('auth:api');
Route::post('/sendMessage','MessageController@sendMessage')->middleware('auth:api');
Route::post('/consultation/add','ConsultationController@add')->middleware('auth:api');
Route::get('/getAppointment/{id}','RdvController@add')->middleware('auth:api');
Route::get('/DashAdmin','UserController@DashAdmin')->middleware('auth:api');
Route::get('/getDoctors','UserController@getDoctors')->middleware('auth:api');
Route::get('/getHopitals','UserController@getHopitals')->middleware('auth:api');
Route::get('/getLaboratoires','UserController@getLaboratoires')->middleware('auth:api');
Route::get('/getCliniques','UserController@getCliniques')->middleware('auth:api');
Route::get('/getPharmacies','UserController@getPharmacies')->middleware('auth:api');
Route::post('/UpdatePrestataire','UserController@UpdatePrestataire')->middleware('auth:api');
Route::post('/UpdatePatient','UserController@UpdatePatient')->middleware('auth:api');
Route::get('/getPatientMessages','MessageController@getPatientMessages')->middleware('auth:api');
Route::get('/getPrestataireMessages','MessageController@getPrestataireMessages')->middleware('auth:api');
Route::get('/deleteRDV/{id}','RdvController@DeleteRDV')->middleware('auth:api');



