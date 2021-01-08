<?php

namespace App\Http\Controllers;
use App\Rdv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class RDVController extends Controller
{
    public function add(Request $request,$id){
        $rdv = new Rdv();
        $rdv->patient = $request->user()->patient->id;
        $rdv->prestataire = $id;
        $rdv->etat = "Demande";
        if ( $rdv->save() ) {
            return response()->json(['message'=>'RDV ajoutee avec succes'], 200);
        }
        return response()->json(['message'=>'Impossible d\'effectuee cette demande '], 400);



    }

    public function getAll(){
        return response()->json(Rdv::all(), 200); 
        
    }
    public function getAllByUser($iduser){
        return response()->json(Rdv::where('patient',$iduser)->get(), 200); 
    }

    public function ValiderRDV(Request $request,$id){

        $validator = Validator::make($request->all(), [
            
            'debut' => 'required',
            'fin' => 'required',
            'date' => 'required'
            
            
        ]);
        if($validator->fails()){
                return response()->json($validator->errors(), 201);
        }
         $rdv = Rdv::find($id);
         $rdv->debut = $request->debut;
         $rdv->fin = $request->fin;
         $rdv->date = $request->date;
         $rdv->etat = "Valider";
         if ( $rdv->update() ){
             return response()->json(['message'=> 'Appointmnet Confirmed'], 200);
         }
        
    }
    public function DeleteRDV($id){
        if ( $rdv = Rdv::find($id)->delete() ){
            return response()->json(['message'=> 'Appointmnet Deleted'], 200);
        }

    }
    
}
