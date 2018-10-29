import React from 'react';
import GameBoard from './GameBoard.jsx'
import ReactDOM from 'react-dom'
import $ from 'jquery'

let current_user = null
const game = $("#game_component").data("game")
var proto = "ws:"
if (window.location.protocol === "https:") {
  proto = "wss:"
}
const game_sock = proto + '//' + window.location.host + "/game/" + game + "/"

$.get('/current-user/?format=json', function(result){
    // gets the current user information from Django
    current_user = result
    render_component()
})


function render_component(){
    ReactDOM.render(<GameBoard current_user={current_user} game_id={game} socket={game_sock}/>, document.getElementById("game_component"))
}

