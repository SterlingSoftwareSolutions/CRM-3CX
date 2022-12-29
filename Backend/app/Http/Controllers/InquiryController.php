<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->success(Inquiry::all());
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
            'user_id' => 'required|exists:users,id',
            'customer_id' => 'required|exists:customers,id',
            'call_type_id' => 'required|exists:call_types,id'
        ]);

        return response()->success(Inquiry::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function show(Inquiry  $inquiry)
    {
        // return response()->success(
        //     $inquiry->with('feedback')
        // );

        return $inquiry::with('feedback')->get();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function edit(Inquiry $inquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Inquiry  $inquiry)
    {
        $request->validate([
            'user_id' => 'exists:users,id',
            'customer_id' => 'exists:customers,id',
            'call_type_id' => 'exists:call_types,id'
        ]);

        $inquiry->update($request->all());
        return response()->success($inquiry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Inquiry  $inquiry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {

        $inquiry->delete();
        return response()->success(null);
    }
}
