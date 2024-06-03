document.querySelector("#add_comment").addEventListener("click", function (){
    let text = document.querySelector("#text").value,
        url= new URL(location.href),
        photo_id=url.searchParams.get("id");

    fetch("add_comment.php",{
        method: "POST",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            text: text,
            photo_id: photo_id
        })
    })
        .then(async function (response){
            let data = await response.text();
            data= JSON.parse(data);
            let new_comment_div = document.createElement("div");
            new_comment_div.classList.add("comment");
            let new_comment_author= document.createElement("p");
            new_comment_author.classList.add("author");
            new_comment_author.innerText=data.Name;
            let new_comment_text= document.createElement("p");
            new_comment_text.classList.add("text");
            new_comment_text.innerText=data.Text;
            let new_comment_data= document.createElement("p");
            new_comment_data.classList.add("data");
            new_comment_data.innerText=data.Post_Data;
            new_comment_div.append(new_comment_author, new_comment_text, new_comment_data);
            document.querySelector(".comments h2").after(new_comment_div);
            document.querySelector("#text").value="";
        })
});