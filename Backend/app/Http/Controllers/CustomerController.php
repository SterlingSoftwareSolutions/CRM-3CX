<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Customer::all();
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
            'phone' => 'required|unique:customers'
        ]);

        return Customer::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  str  $phone
     * @return \Illuminate\Http\Response
     */
    public function show($phone)
    {
        return Customer::where('phone', $phone)
            ->with('customer_address')
            ->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  App\Models\Customer $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  str $phone
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $phone)
    {
        $request->validate([
            'phone' => 'unique:customers'
        ]);

        $customer = Customer::where('phone', $phone);
        if ($customer->count() == 1) {
            $customer->update($request->all());
            return 0;
        }
        return 1; // customer doesn't exist
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  str $phone
     * @return \Illuminate\Http\Response
     */
    public function destroy($phone)
    {
        $customer = Customer::where('phone', $phone);
        if ($customer->count() == 1) {
             $customer->delete();
             return 0;
        }
        return 1; // customer doesn't exist
    }

    /**
     * Find resources from storage.
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Customer::where('name', 'like', '%' . $name . '%')->get();
    }
}
