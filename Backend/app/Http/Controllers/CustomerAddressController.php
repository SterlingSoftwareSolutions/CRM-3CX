<?php

namespace App\Http\Controllers;

use App\Models\CustomerAddress;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as Codes;

class CustomerAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->success(CustomerAddress::all());
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
            'customer_id' => 'required|exists:customers,id'
        ]);

        return response()->success(
            CustomerAddress::create($request->all()),
            Codes::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerAddress $customerAddress)
    {
        return response()->success($customerAddress);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerAddress $customerAddress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerAddress $customerAddress)
    {
        $request->validate([
            'customer_id' => 'exists:customers,id'
        ]);

        $customerAddress->update($request->all());
        return response()->success($customerAddress);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerAddress $customerAddress)
    {
        $customerAddress->delete();
        return response()->success('Customer Address Deleted');
    }

    /**
     * find the customer this address is for
     *
     * @param  \App\Models\CustomerAddress  $customerAddress
     * @return \Illuminate\Http\Response
     */
    public function customer(CustomerAddress $customerAddress)
    {
        return response()->success(
            $customerAddress->customer
        );
    }
}
