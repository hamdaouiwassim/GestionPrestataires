<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use App\Patient;
use App\Rdv;
use App\Prestataire;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Auth;
use Illuminate\Support\Carbon;
class UserController extends Controller
{
    //
    public function index(){
        return User::all();
    }
    public function user(Request $request){
        //$user = User::where("id",$request->user()->id)->first();
        return $request->user();
    }
    
    public function userData(Request $request){
        
        if ($request->user()->role == "patient"){
            return response()->json($request->user()->patient, 200); 
        }else if ($request->user()->role == "prestataire"){
            //$request->user()->prestataire->image = $request->user()->image;
            return response()->json($request->user()->prestataire, 200); 
        }
       
    }


    public function add(Request $request){

        if ($request->role == "patient"){
                
                $validator = Validator::make($request->all(), [
                    'email' => 'required|unique:users',
                    'password' => 'required',
                    'nom' => 'required',
                    'prenom' => 'required',
                    'telephone' => 'required',
                    
                ]);
        }else{
            $validator = Validator::make($request->all(), [
                'email' => 'required|unique:users',
                'password' => 'required',
                'nomcomplet' => 'required',
                'telephone' => 'required',
                'adresse' => 'required',
                'gouvernourat' => 'required',
                'description' => 'required',
                'type' => 'required'

                
            ]);

        }

         if($validator->fails()){
            return response()->json($validator->errors(), 201);
       }

        $user = new User();
        $user->name = "";
        $user->email = $request->email ;
        $user->password =  Hash::make($request->password) ;
        $user->role = $request->role ;

        if ( $user->save() ){
            if ( $user->role == "patient" ){
                $patient = new Patient();
                $patient->nom = $request->nom;
                $patient->prenom = $request->prenom;
                $patient->telephone = $request->telephone;
                $patient->patient = $user->id;
                if ($patient->save()){
                    return response()->json(['message'=> 'Patient cree avec success ...!'], 200);

                }else{
                    User::find($user->id)->delete();
                    return response()->json(['message'=> 'Creation de patient a echoue ...!'], 400);

                }

            }else{
                $prestataire = new Prestataire();
                $prestataire->nomcomplet = $request->nomcomplet;
                $prestataire->description = $request->description;
                $prestataire->telephone = $request->telephone;
                $prestataire->gouvernourat = $request->gouvernourat;
                $prestataire->type = $request->type;
                $prestataire->adresse = $request->adresse;
                $prestataire->prestataire = $user->id;
                if ($prestataire->save()){
                    return response()->json(['message'=> 'prestataire cree avec success ...!'], 200);

                }else{
                    User::find($user->id)->delete();
                    return response()->json(['message'=> 'Creation de prestataire a echoue ...!'], 400);

                }

            }

        }

    }
    public function edit(Request $request , $id){
        $user = User::find($id);
        if ($user->role == "patient"){

            $user->patient->nom = $request->nom;
            $user->patient->prenom = $request->prenom;
            $user->patient->telephone = $request->telephone;
            if ($user->patient->update()){
                return response()->json(['message'=> ' les coordonnes de patient modifiee avec success'], 200);
            }
            return response()->json(['message'=> 'impossible de modifiee le patient'], 400);

        }else if($user->role == "prestataire") {
            
            $user->prestataire->nomcomplet = $request->nomcomplet;
            $user->prestataire->description = $request->description;
            $user->prestataire->telephone = $request->telephone;
            $user->prestataire->gouvernourat = $request->gouvernourat;
            $user->prestataire->type = $request->type;

            if ($user->prestataire->update()){
                return response()->json(['message'=> ' les coordonnes de prestataire modifiee avec success'], 200);
            }
            return response()->json(['message'=> 'impossible de modifiee le prestataire'], 400);


        }

    }

    public function login(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        /*return response()->json([
            'message' => 'Unauthorized',
            'status_code' => 401
        ], 401);
        
        $request->validate([
            'name' => 'required|string|max:25',
            'email' => 'required|string|email',
            'remember_me' => 'boolean'
        ]);
        */

       if (!Auth::attempt(['email' => $request->email, 'password' => $request->password]) ){
           return response()->json([
               'message' => 'Invalid username/password',
               'status_code' => 401
           ], 401);
       }
       //$user = $request->user();
       $user = Auth::user();
       //return response()->json($user, 200);

     
        
       $tokenData = $user->createToken('Personal Acces Token');
      

       $token = $tokenData->token;
       
    //    if ($request->remember_me ){
    //        $token->expires_at = Carbon::now()->addWeeks(1);

    //    }

       if ($token->save()){
           return response()->json([
               'user' => $user ,
               'access_token' => $tokenData->accessToken,
               'token_type' => 'Bearer',
              // 'token_scope' => $tokenData->token->scopes[0],
               'exipres_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
               'status_code' => 200
           ], 200);

       }else{
           return response()->json([
               'message'=> 'Erreur d\'authentification ',
               'status_code' => 500

           ], 500);
       }

    }
    public function editCurrentUser(Request $request){

        if ($request->user()->role == "patient"){
                
            $validator = Validator::make($request->all(), [
                'email' => 'required',
                'nom' => 'required',
                'prenom' => 'required',
                'telephone' => 'required',
                
            ]);
       }else{
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'nomcomplet' => 'required',
            'telephone' => 'required',
            'adresse' => 'required',
            'gouvernourat' => 'required',
            'description' => 'required',
            'type' => 'required'

            
        ]);

    }

     if($validator->fails()){
        return response()->json($validator->errors(), 201);
        }
    if  ($request->user()->role == "patient"){
        if ($request->email != $request->user()->email){
            $request->user()->email = $request->password ;
        }
        $request->user()->email = $request->email ;
        if ($request->password != ''){
            $request->user()->email = $request->password ;
        }
        
        if ( $request->user()->update() ) {
            $request->user()->patient->nom =$request->nom;
            $request->user()->patient->prenom =$request->prenom;
            $request->user()->patient->telephone =$request->telephone;
            if ( $request->user()->patient->update() ){
                return response()->json(['message'=>'Patient Modified Successfully ...!'], 200);
            }
        }

        return response()->json(['message'=>'Error While Modifing ...!'], 200);
    }else{
        // Prestataire
    }
    }
    public function getRdvsByUser(Request $request){
            $alldata = array();
            $prestataires = Prestataire::all();
            foreach($request->user()->patient->rdvs as $r ){
                foreach( $prestataires as $p){
                            if ($p->id == $r->prestataire ){
                                $data = array (  'id' => $r->id ,
                                'etat' => $r->etat,
                               'debut' => $r->debut,
                               'fin' => $r->fin,
                               'date' => $r->date,
                               'prestataire' => $p->nomcomplet  );
                            }
                }
                
                array_push($alldata,$data); 
                

            }
            return response()->json($alldata, 200); 
    }
    public function getConsultationByUser(Request $request){
        $alldata = array();
        //$prestataires = Prestataire::all();
        foreach($request->user()->patient->rdvs as $r ){
            if ( $r->etat == "Valider" ){
                            $prestataire = Prestataire::find($r->prestataire);
                            $data = array (  
                            'id' => $r->consultation->id ,
                            'prestataire' => $prestataire->nomcomplet,
                            'remarque' => $r->consultation->remarque ,
                            'date' => $r->date );
         
            array_push($alldata,$data); 
        }

        }
        return response()->json($alldata, 200); 
    }


    public function dashPrestataire(Request $request){
        $patients = array();
        $nbc = 0;
        foreach($request->user()->prestataire->rdvs as $r){
            if (!in_array($r->patient,$patients)){
                array_push( $patients , $r->patient );
            }
            if($r->consultation){
                $nbc++;
            }
           
        }
        $rdvs = count($request->user()->prestataire->rdvs);
        return response()->json( [$rdvs,count($patients),$nbc], 200);
        

    }

    public function rdvsPrestataire(Request $request){
        $rdvsD = array();
        $rdvsV = array();
        $rdvsT = array();
        foreach($request->user()->prestataire->rdvs as $r){
               //echo($r->patient);
                    $p = Patient::find($r->patient);
                    $data = array ( 
                    'id' => $r->id ,
                    'etat' => $r->etat,
                    'debut' => $r->debut,
                    'fin' => $r->fin,
                    'date' => $r->date,
                    'patient' => $p->nom." ".$p->prenom  );

            if ($r->etat == "Valider"){
                array_push( $rdvsV , $data );
            }else if ($r->etat == "Demande"){
                array_push( $rdvsD , $data );
            }else{
                array_push( $rdvsT , $data );
            }
            
           
        }
  
        return response()->json( [$rdvsD,$rdvsV,$rdvsT], 200);
        

    }

    public function consultationsPrestataire(Request $request){
        $consultations = array();
        
        foreach($request->user()->prestataire->rdvs as $r){
            if( $r->consultation ){
                $p = Patient::find($r->patient);
                $data = array (  
                    'id' => $r->consultation->id ,
                    'patient' => $p->nom." ".$p->prenom,
                    'remarque' => $r->consultation->remarque ,
                    'date' => $r->date );

        
     

            array_push( $consultations , $data );
      
            }
                    
            
           
        }
  
        return response()->json( $consultations, 200);
        

    }

    public function patientsPrestataire(Request $request){
        $patients = array();
        $patientsIds = array();
        foreach($request->user()->prestataire->rdvs as $r){
      
            if (!in_array($r->patient,$patientsIds)){
                $p = Patient::find($r->patient);
                $data = array (  
                    'id' => $p->id ,
                    'patient' => $p->nom." ".$p->prenom,
                    'email' => $p->user->email ,
                    'image' => $p->image ,
                    'telephone' => $p->telephone );
                array_push( $patients , $data );
                array_push( $patientsIds , $r->patient );
            } 
            
           
        }
  
        return response()->json( $patients, 200);
        

    }

    public function DashAdmin(Request $request){
        if( $request->user()->role == "admin" ){

                $doctors = Prestataire::whereIn('type',["dentiste","gynecologue","orthopediste","ophtalmologue"])->get()->count();
                $clinical = Prestataire::where('type',"clinique")->get()->count();
                $laboratoire  = Prestataire::where('type',"laboratoire")->get()->count();
                $hopital = Prestataire::where('type',"hopital")->get()->count();
                $pharmacie = Prestataire::where('type',"pharmacie")->get()->count();
                
                return response()->json([ $clinical, $doctors, $hopital , $laboratoire ,$pharmacie], 200);


        }

    }
    public function getDoctors(Request $request){
        if( $request->user()->role == "admin" ){
                $doctors = array();
                $doctorsL = Prestataire::whereIn('type',["dentiste","gynecologue","orthopediste","ophtalmologue"])->get();
                foreach($doctorsL as $d){

                    $data = array (
                        "id" => $d->id ,
                        "image" => $d->image ,
                        "email" => User::find($d->prestataire)->email ,
                        "gouvernourat" => $d->gouvernourat ,
                        "telephone" =>   $d->telephone ,
                        "nomcomplet" => $d->nomcomplet


                    );
                    array_push( $doctors , $data );
                }
                return response()->json($doctors, 200);


        }

    }
    public function getHopitals(Request $request){
        if( $request->user()->role == "admin" ){
            $doctors = array();
            $doctorsL = Prestataire::where('type',"hopital")->get();
            foreach($doctorsL as $d){

                $data = array (
                    "id" => $d->id ,
                    "image" => $d->image ,
                    "email" => User::find($d->prestataire)->email ,
                    "gouvernourat" => $d->gouvernourat ,
                    "telephone" =>   $d->telephone ,
                    "nomcomplet" => $d->nomcomplet


                );
                array_push( $doctors , $data );
            }
            return response()->json($doctors, 200);


    }
    }
    public function getLaboratoires(Request $request){
        if( $request->user()->role == "admin" ){
            $doctors = array();
            $doctorsL = Prestataire::where('type',"laboratoire")->get();
            foreach($doctorsL as $d){

                $data = array (
                    "id" => $d->id ,
                    "image" => $d->image ,
                    "email" => User::find($d->prestataire)->email ,
                    "gouvernourat" => $d->gouvernourat ,
                    "telephone" =>   $d->telephone ,
                    "nomcomplet" => $d->nomcomplet


                );
                array_push( $doctors , $data );
            }
            return response()->json($doctors, 200);


    }
    }
    public function getCliniques(Request $request){
        if( $request->user()->role == "admin" ){
            $doctors = array();
            $doctorsL = Prestataire::where('type',"clinique")->get();
            foreach($doctorsL as $d){

                $data = array (
                    "id" => $d->id ,
                    "image" => $d->image ,
                    "email" => User::find($d->prestataire)->email ,
                    "gouvernourat" => $d->gouvernourat ,
                    "telephone" =>   $d->telephone ,
                    "nomcomplet" => $d->nomcomplet


                );
                array_push( $doctors , $data );
            }
            return response()->json($doctors, 200);


    }
    }
    public function getPharmacies(Request $request){
        if( $request->user()->role == "admin" ){
            $doctors = array();
            $doctorsL = Prestataire::where('type',"pharmacie")->get();
            foreach($doctorsL as $d){

                $data = array (
                    "id" => $d->id ,
                    "image" => $d->image ,
                    "email" => User::find($d->prestataire)->email ,
                    "gouvernourat" => $d->gouvernourat ,
                    "telephone" =>   $d->telephone ,
                    "nomcomplet" => $d->nomcomplet


                );
                array_push( $doctors , $data );
            }
            return response()->json($doctors, 200);


    }
    }
    public function  UpdatePrestataire(Request $request){
        
           
           //dd($request->user());
            if  ($request->hasFile('image')) {
                $file = $request->file('image');
                $newname = uniqid().".".$file->getClientOriginalExtension(); 
                //Move Uploaded File
                $destinationPath = 'uploads';
                $file->move($destinationPath,$newname);
               // $request->user()->image = $newname;
                $request->user()->prestataire->image = $newname;
            }
                $request->user()->email = $request->email;
                $request->user()->update();
                $request->user()->prestataire->nomcomplet = $request->nomcomplet;
                $request->user()->prestataire->description = $request->description;
                $request->user()->prestataire->type = $request->type;
                $request->user()->prestataire->gouvernourat = $request->gouvernourat;
                $request->user()->prestataire->telephone = $request->telephone;
                if ( $request->user()->prestataire->update() ){
                    return response()->json( ["message" => "Prestataire Modified" ], 200);
                }
            
         
            


     
        return response()->json( [ "message" => "Echec Modified prestataire" ], 400);
       
        
                
    }
    public function  UpdatePatient(Request $request){
        
           
        //dd($request->user());
         if  ($request->hasFile('image')) {
             $file = $request->file('image');
             $newname = uniqid().".".$file->getClientOriginalExtension(); 
             //Move Uploaded File
             $destinationPath = 'uploads';
             $file->move($destinationPath,$newname);
            // $request->user()->image = $newname;
             $request->user()->patient->image = $newname;
         }
             $request->user()->email = $request->email;
             $request->user()->update();
             $request->user()->patient->nom = $request->nom;
             $request->user()->patient->prenom = $request->prenom;
             $request->user()->patient->telephone = $request->telephone;
             if ( $request->user()->patient->update() ){
                 return response()->json( ["message" => "Patient Modified" ], 200);
             }
         
      
         


  
     return response()->json( [ "message" => "Echec Modified Patient" ], 400);
    
     
             
 }
}
