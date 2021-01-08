<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prestataire extends Model
{
    //
    public function user(){
        return $this->belongsTo('App\User','prestataire','id');

    }
    public function rdvs(){
        return $this->hasMany('App\Rdv','prestataire','id');
    }
}
