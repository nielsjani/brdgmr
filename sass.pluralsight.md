# SASS 
- SASS depended on indentions
- SCSS depends on {}

## Variables
$myVar: #ffeedd;

## operations

font-size: 4px + 4;

#other operations

- color: lighten($color, 10%);
- $value: if(true, $color1, $color2);

#string interpolation

- $root: "/images";
- background: url("#{root}background.jpg");

# Rules
- can be nested
 
 nav {
 
 bla: bla
 
 blo: blo
 
 bli: bli
 
  ul {
    alb: alb  
    li { 
    olb: olb
    }
  
  }
 
 }
 
 
# @import
- @import "foo.css";
- @import "foo.scss";
- @import "foo";
- ul{@import "colors.css""}

# @extend

.button {
  color: black;
  }

.submit-button {
  @extend .button // makes submit button black
  //multiple extends are possible
}
 
# @mixin
- functions with params you can  @include in {}-tags. defaults for params are possible

# @function
- more complex function with params and @return value

# control directives
- @if / @else if / @else
- @for $col from 1 through 4
- @each, @while: different way for loops


