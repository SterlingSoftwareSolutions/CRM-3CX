<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CallType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'comment'
    ];

    function inquiry()
    {
        return $this->hasMany(Inquiry::class);
    }
}
