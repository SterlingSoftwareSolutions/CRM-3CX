<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as Codes;

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

        return response()->success(
            Inquiry::create($request->all()),
            Codes::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int $inquiry
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->success(
            Inquiry::where('id', $id)
            ->with('feedback')
            ->firstOrFail()
        );
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
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();
        return response()->success("Inquiry Deleted");
    }

    /**
     * Number of open inquiries
     *
     * @return \Illuminate\Http\Response
     */
    public function count()
    {
        return response()->success([
            'total' => Inquiry::count(),
            'open' => Inquiry::where('open', true)->count(),
            'closed' => Inquiry::where('open', false)->count()
        ]);
    }

}
