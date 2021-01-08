<?php

namespace App\Http\Controllers;
use App\Consultation;
use App\Rdv;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    //
    public function add(Request $request){
        $consultation = new Consultation();
        $consultation->rdv = $request->rdv;
        $consultation->remarque = $request->remarque;
       
        if ( $consultation->save() ) {
            $rdv = Rdv::find($request->rdv);
            $rdv->etat ="Traiter";
            if ( $rdv->update() ){
            return response()->json(['message'=>'Consultation ajoutee avec succes'], 200);
             }
        }
        return response()->json(['message'=>'Impossible d\'effectuee cette demande '], 400);



    }

}
