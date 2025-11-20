$(".menu").toggle(view_Menu, close_Menu);

function view_Menu(){
	$(".mobile_menu_section").css({"display":"block"});
	$(":root").css({"overflow-y":"hidden"});
}

function close_Menu(){
	
	$(".mobile_menu_section").css({"display":"none"});
	$(":root").css({"overflow-y":"visible"});
}



let slide_Index = 1;
show_Slide(slide_Index);



function plus_Slide(n){
	show_Slide(slide_Index += n);
	
}



function show_Slide(n){
	let get_Slide_Item = document.getElementsByClassName("slide_item");
	
	
	let i;
	
	if(n > get_Slide_Item.length){
		slide_Index = 1;
	}
	
	if(n < 1){
		slide_Index = get_Slide_Item.length;
	}
	
	for(i = 0; i < get_Slide_Item.length; i++){
		get_Slide_Item[i].style.display = "none";
	}
	get_Slide_Item[slide_Index - 1].style.display = "inline-block";
	
	
	
}



let get_Our_Heading = document.querySelector(".our_heading");


function our_Heading_Animation(entries){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("our_heading_animation_class");
		}
		
	});
}

our_Heading_Animation_Root = 
{
    root : null,
    rootMargin : "0px",
    threshold : 0.6,	
}



our_Heading_Animation_API = new IntersectionObserver(our_Heading_Animation, our_Heading_Animation_Root);
our_Heading_Animation_API.observe(get_Our_Heading);






let get_Other_Text = document.querySelectorAll(".other_text, .second_section_flex_right_item, .third_section_flex_mid_item");



function other_Text_Animation(entries){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("other_text_animation_class");
		}
		
	});
}

other_Text_Animation_Root = 
{
    root : null,
    rootMargin : "0px",
    threshold : 0.3,	
}



other_Text_Animation_API = new IntersectionObserver(other_Text_Animation, other_Text_Animation_Root);

get_Other_Text.forEach( (target) => { other_Text_Animation_API.observe(target) });





let get_Mission_Img = document.querySelector(".mission_img");


function mission_Img_Animation(entries){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("mission_img_animation_class");
		}
		
	});
}

mission_Img_Animation_Root = 
{
    root : null,
    rootMargin : "0px",
    threshold : 0.6,	
}



mission_Img_Animation_API = new IntersectionObserver(mission_Img_Animation, mission_Img_Animation_Root);
mission_Img_Animation_API.observe(get_Mission_Img);