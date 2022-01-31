
window.addEventListener('load',function(){
    loadProducts()
    
})


let data = [];
       async function loadProducts(){
            try{
            let response = await fetch(`http://localhost:3000/data`)
             response = await response.json()

            return createProductCards(response);
            }
            catch(err){

            }
        }

        function createProductCards(data){
            const container = document.getElementById('container');
            container.innerHTML = "";
            const div = document.createElement('div');
            for(let product of data){
                const card = createCard(product);
                div.append(card);
            }
            container.append(div);
        }

        function createCard(data){
            const div = document.createElement('div');
            div.className= "card-container";

            const right = document.createElement('div');

            const h3 = document.createElement('h3');
            h3.textContent =   data.book
            const author = document.createElement("div");
            author.textContent = `author: ${data.author}`

            const cmnt = document.createElement("div")
            const p1 = document.createElement("p")
            p1.textContent=`${data.comments[0]}`

            const p2 = document.createElement("p")
            p2.textContent=`${data.comments[1]}`
            let update = document.createElement('div')
            update.innerHTML  = `<input type="text" id="update1"  placeholder="update1">
            <input type="text" id="update2"  placeholder="update2">
            <button id="updatedata1">update1</button>
            <button id="updatedata2">update2</button>`

            cmnt.append(p1,p2 , update)
            right.append( h3, author,cmnt);
            div.append( right)
            return div;
        }

        let addData = document.getElementById('addData')
        addData.addEventListener('click',function(){
            addDataElement()
        })


        function addDataElement(){
            let bookName = document.getElementById("bookName").value
            let authorName = document.getElementById("authorName").value
            let payload = {
                "book" : bookName,
                "author" : authorName
            }

            fetch("http://localhost:3000/data", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
            .then((response) => response.json())
            .then((json) => loadProducts())
            .catch((err) => console.log(err));

            
        }