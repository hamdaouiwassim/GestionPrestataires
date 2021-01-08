<?php

namespace App\Http\Controllers;
use App\Message;
use App\Prestataire;
use App\Patient;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    //
    public function sendMessage(Request $request){


                //dd($request->receiver->user());

                $message = new Message();
                $message->name = $request->name;
                if ( $request->user()->role == "patient" ){
                    $message->sender = $request->user()->patient->id;
                }else if ( $request->user()->role == "prestataire"){
                    $message->sender = $request->user()->prestataire->id;
                }
                $message->receiver = $request->receiver;
                //$message->file = $request->file;
                $message->content = $request->content;
                $message->type = $request->type;
                if ( $message->save() ){
                    return response()->json(['message' => "Message Sent "], 200);
                }
    }

    public function getPatientMessages(Request $request){
                $messages = array();
                $messagesL = Message::where('receiver',$request->user()->patient->id)
                                    ->where('type','pres-pat')
                                    ->get();
                foreach( $messagesL as $m ){
                        $data = array(
                            "id" => $m->id ,
                            "sender" =>  Prestataire::find($m->sender)->nomcomplet ,
                            "content" => $m->content ,
                            "date" => $m->created_at
                        );
                        array_push( $messages , $data);

                }
                return response()->json($messages, 200);

    }
    public function getPrestataireMessages(Request $request){
        $messages = array();
                $messagesL = Message::where('receiver',$request->user()->prestataire->id)
                                    ->where('type','pat-pres')
                                    ->Orwhere('type','pres-pres')
                                    ->where('receiver',$request->user()->prestataire->id)
                                    ->get();
                foreach( $messagesL as $m ){
                    if ( $m->type == "pat-pres" ){
                        $data = array(
                            "id" => $m->id ,
                            "type"=> "Patient",
                            "sender" =>  Patient::find($m->sender)->nom." ".Patient::find($m->sender)->prenom ,
                            "content" => $m->content ,
                            "date" => $m->created_at
                        );
                    }else{
                        $data = array(
                            "id" => $m->id ,
                            "type"=> "Prestataire",
                            "sender" =>  Prestataire::find($m->sender)->nomcomplet ,
                            "content" => $m->content ,
                            "date" => $m->created_at
                        );
                    }
                        array_push( $messages , $data);

                }
                return response()->json($messages, 200);

    }
}
