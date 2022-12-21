<?php

namespace App\Http\Controllers;

use App\Models\CallType;
use App\Models\Customer;
use Illuminate\Http\Request;

class CallTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CallType::all();
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

        return CallType::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return CallType::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function edit(CallType $callType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $calltype = CallType::findorfail($id);
        $calltype->update($request->all());
        return $calltype;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CallType::destroy($id);
    }
}
