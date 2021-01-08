<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Prestataire;
use App\Patient;
use Illuminate\Support\Facades\Validator;
class PrestataireController extends Controller
{
    //
    public function search(Request $request){

        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'gouvernourat' => 'required',
            
            
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 201);
       }

       $prestataires = Prestataire::where('type',$request->type)
                                    ->where('gouvernourat',$request->gouvernourat)
                                    ->get();
       
        return response()->json($prestataires, 200);

    }
    public function prestataireByName($name){
        $prestataires = Prestataire::where('nomcomplet','Like','%'.$name.'%')
                                    ->get();
       
        return response()->json($prestataires, 200);

    }
    public function prestataireGetAll(){
        $prestataires = Prestataire::all();
        return response()->json($prestataires, 200);
    }

    public function getPrestataireById($id){
        return response()->json( Prestataire::find($id) , 200);

    }
    public function patientGetAll(){
        $patients = Patient::all();
        return response()->json($patients, 200);
    }
    
  
}
