<?php

namespace App\Http\Controllers;

use App\Models\UserPhone;
use Illuminate\Http\Request;

class UserPhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserPhone::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            // validation
        ]);

        return UserPhone::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserPhone  $userPhone
     * @return \Illuminate\Http\Response
     */
    public function show(UserPhone  $userPhone)
    {
        return $userPhone;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserPhone  $userPhone
     * @return \Illuminate\Http\Response
     */
    public function edit(UserPhone $userPhone)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserPhone  $userPhone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserPhone  $userPhone)
    {
        $userPhone->update($request->all());
        return $userPhone;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserPhone  $userPhone
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPhone  $userPhone)
    {
        $userPhone->delete();
    }
}
