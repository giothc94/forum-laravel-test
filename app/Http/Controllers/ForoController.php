<?php

namespace App\Http\Controllers;

use App\Models\Forum;
use App\Models\Course;
use Illuminate\Http\Request;

class ForoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $message = '';
        try {
            $t = Forum::all();
        } catch (\Throwable $th) {
            $message = $th->getMessage();
        }
        return $t;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $message = '';
        try {
            $foro = new Forum();
            $foro->name = $request->name;
            $foro->classrooms_courses_idcourse = $request->classrooms_courses_idcourse;
            $foro->save();
            $message = $foro;
        } catch (\Throwable $th) {
            $message = $th->getMessage();
        }
        return $message;
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
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $forums = Forum::where('classrooms_courses_idcourse',$request->idcourse)->get();
        return $forums;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function edit(Forum $forum)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Forum $forum)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forum $forum)
    {
        //
    }
}
