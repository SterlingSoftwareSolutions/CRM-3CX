<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'address_line_1',
        'address_line_2'
    ];
    
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
