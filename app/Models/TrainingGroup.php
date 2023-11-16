<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'training_id',
        'name',
        'description'
    ];
}
