<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerPhone extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'mobile',
        'home',
        'company'
    ];

    public function customer()
    {
        $this->belongsTo(Customer::class);
    }
}
