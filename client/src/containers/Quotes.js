import React, { Component } from 'react'
import jQuery from "jquery"
import '../quote.css'

export class Quotes extends Component {

  componentDidMount(){
    jQuery(document).ready(function($) {
      if (  $('.quote-loop').length ){
      (function loop() {
        $('.quote-loop').each(function() {
          var $self = $(this);
          $self.parent().queue(function (n) {
            $self.fadeIn(1000).delay(2700).fadeOut(1000, n);
          });
        }).parent().promise().done(loop);
      }());
    }	
  });
  }

  render() {
    return (
      <div class="quote-box">
	<div class="quote-loop">
  <p class="center quote"><i>"What I cannot create, I do not understand."</i></p>
  <cite>-Richard Feynman</cite>
	</div>
	<div class="quote-loop quote-hide">
  <p class="center quote"><i>"I want to put a ding in the universe."</i></p>
  <cite>-Steve Jobs</cite>
	</div>
	<div class="quote-loop quote-hide">
  <p class="center quote"><i>“Silence is our enemy, and sound is our weapon.”</i></p>
  <cite>-Janelle Monàe</cite>
	</div>
	<div class="quote-loop quote-hide">
  <p class="center quote"><i>"Would you tell Piccasso to sell his guitars?"</i></p>
  <cite>-Jack Black in School of Rock</cite>

	</div>
</div>   
    )
  }
}


export default Quotes