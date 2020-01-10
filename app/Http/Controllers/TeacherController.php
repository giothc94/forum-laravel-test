<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Teacher::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $teacher = new Teacher();
        $teacher->ci = $request->ci;
        $teacher->asignatura = $request->asignatura;
        $teacher->name = $request->name;
        $teacher->lastname = $request->lastname;
        $teacher->isTeacher = true;
        $teacher->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $teacher = Teacher::findOrFail($request->id);
        return $teacher;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $teacher = Teacher::findOrFail($request->idteacher);
        $teacher->ci = $request->ci;
        $teacher->asignatura = $request->asignatura;
        $teacher->name = $request->name;
        $teacher->lastname = $request->lastname;
        $teacher->isTeacher = true;
        $teacher->save();
        return $teacher;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Teacher::destroy($request->id);
        return $request;
    }
}
