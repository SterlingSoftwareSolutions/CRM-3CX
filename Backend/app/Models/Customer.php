<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    function phones()
    {
        return $this->hasMany(CustomerPhone::class);
    }

    function addresses()
    {
        return $this->hasMany(CustomerAddress::class);
    }
}
