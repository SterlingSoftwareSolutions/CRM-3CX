<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'inquiry_id',
        'feedback'
    ];

    public function inquiry()
    {
        return $this->belongsTo(Inquiry::class);
    }
}
