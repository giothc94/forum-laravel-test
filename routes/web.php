<?php
// use Illuminate\Routing\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// student routes
Route::post('/api/students/create','StudentController@create');
Route::put('/api/students/edit','StudentController@edit');
Route::delete('/api/students/delete/{id}','StudentController@destroy');
Route::get('/api/students/{id}','StudentController@show');
Route::get('/api/students','StudentController@index');
Route::post('/api/students/except','StudentController@except');
// teacher routes
Route::post('/api/teachers/create','TeacherController@create');
Route::put('/api/teachers/edit','TeacherController@edit');
Route::delete('/api/teachers/delete/{id}','TeacherController@destroy');
Route::get('/api/teachers/{id}','TeacherController@show');
Route::get('/api/teachers','TeacherController@index');
// course routes
Route::post('/api/courses/create','CourseController@create');
Route::put('/api/courses/edit','CourseController@edit');
Route::post('/api/courses/delete','CourseController@destroy');
Route::get('/api/courses/{id}','CourseController@show');
Route::get('/api/courses','CourseController@index');
// classrooms routes
Route::post('/api/classrooms/create','ClassroomController@create');
Route::put('/api/classrooms/edit','ClassroomController@edit');
Route::post('/api/classrooms/delete','ClassroomController@destroy');
Route::post('/api/classrooms/find','ClassroomController@show');
Route::get('/api/classrooms','ClassroomController@index');
Route::get('/api/classrooms/student','ClassroomController@classWithStudent');
// forum routes
Route::get('/api/forum','ForoController@index');
Route::post('/api/forum/create','ForoController@create');
Route::post('/api/forum/find','ForoController@show');
// participation routes
Route::post('/api/participation/find','ParticipationController@create');
Route::get('/api/forum','ParticipationController@index');

Route::get('/{any}','ApplicationController')->where('any','.*');