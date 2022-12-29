<?php

namespace App\Http\Controllers;

use App\Models\CallType;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as Codes;

class CallTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->success(CallType::all());
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

        return response()->success(
            CallType::create($request->all()),
            Codes::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->success(CallType::find($id));
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
    public function update(Request $request, CallType $callType)
    {
        $callType->update($request->all());
        return response()->success($callType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function destroy(CallType $callType)
    {
        $callType->delete();
        return response()->success("Call Type Deleted");
    }

    /**
     * Get all the inquiries that have this call type
     *
     * @param  CallType  $callType
     * @return \Illuminate\Http\Response
     */
    public function inquiries(CallType $callType)
    {
        return response()->success(
            $callType->inquiries
        );
    }
}
