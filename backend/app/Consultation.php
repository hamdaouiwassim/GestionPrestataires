<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    //
    public function consultation(){
        return $this->belongsTo('App\Rdv','rdv','id');
    }
}
