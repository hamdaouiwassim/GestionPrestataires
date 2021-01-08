<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rdv extends Model
{
    //
    public function patient(){
        return $this->belongsTo('App\Patient','patient','id');
    }
    public function prestataire(){
        return $this->belongsTo('App\Prestataire');
    }
    public function consultation(){
        return $this->hasOne('App\Consultation','rdv','id');
    }
}
