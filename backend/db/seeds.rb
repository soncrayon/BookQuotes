# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Quote.destroy_all
Author.destroy_all
Genre.destroy_all

Author.create([
        {name:"Charles Dickens"},
        {name:"Aldous Huxley"},
        {name:"Andrew Sean Greer"},
        {name:"Richard Wright"},
        {name:"Ursula K. LeGuin"},
        {name:"William Shakespeare"},
        {name:"Baroness Orczy"},
        {name:"Edith Hamilton"},
        {name:"E.L. Doctorow"},
        {name:"George Orwell"}

])

Genre.create([
        {name:"Historical Fiction"},
        {name:"Science Fiction"},
        {name:"Poetry"},
        {name:"LGBTQIA+"},
        {name:"Black Diaspora"},
        {name:"Mythology"},
        {name:"Drama"},
        {name:"Dystopian"},
        {name:"Romance"},
        {name:"Thriller"},
        {name:"Nonfiction"},
        {name:"Self-help"},
        {name:"Comedy"},
        {name:"Biographical"}
])

Quote.create([
        {
                title:"A Tale of Two Cities",
                content:'"It was best of times, it was the worst of times."',
                image:"https://img.thriftbooks.com/api/images/l/0226d6a77da319acf44e4d9a1982e25da5fcc32b.jpg",                 
                author_id:Author.find_by(name:"Charles Dickens").id,
                genre_id:Genre.find_by(name:"Historical Fiction").id 
        },
        {
                title:"Ragtime",
                content:'"It was evident to him that the world composed and recomposed itself constantly in an endless process of dissatisfaction."', 
                image:"https://image.ebooks.com/previews/000/000569/000569867/000569867-hq-168-80.jpg",                
                author_id:Author.find_by(name:"E.L. Doctorow").id,
                genre_id:Genre.find_by(name:"Historical Fiction").id
        },
        {
                title:"Mythology",
                content:'"The imagination was vividly alive and not checked by reason, so that anyone in the woods might see through the trees a fleeing nymph, or bending over a clear pool to drink, behold in the depths a naiad\'s face."',
                image:"https://images-na.ssl-images-amazon.com/images/I/51lrXb4fumL._SL300_.jpg",                
                author_id:Author.find_by(name:"Edith Hamilton").id,
                genre_id:Genre.find_by(name:"Mythology").id
        },
        {
                title:"The Scarlet Pimpernel",
                content:'"The rest is silence! -- silence and joy for those who had endured so much suffering, yet found at last a great and lasting happiness."', 
                image:"https://images-na.ssl-images-amazon.com/images/I/51heBMHPmLL._SX308_BO1,204,203,200_.jpg",
                author_id:Author.find_by(name:"Baroness Orczy").id,
                genre_id:Genre.find_by(name:"Historical Fiction").id
        },
        {
                title:"The Left Hand of Darkness",
                content:'"Legends of prediction are common throughout the whole Household of Man. God speaks, spirits speak, computers speak."',
                image:"https://images-na.ssl-images-amazon.com/images/I/41fcrqvOCML._SL300_.jpg",                
                author_id:Author.find_by(name:"Ursula K. LeGuin").id,
                genre_id:Genre.find_by(name:"Science Fiction").id
        },
        {
                title:"Ape and Essence",
                content:'"He liked being in a mess and, still more, he liked talking about his predicament."',
                image:"https://img.thriftbooks.com/api/images/l/0fc93964dfe7d6d745bfe3508df5a442538329b6.jpg",                
                author_id:Author.find_by(name:"Aldous Huxley").id,
                genre_id:Genre.find_by(name:"Science Fiction").id
        },
        {
                title:"Less",
                content:'"Poetry every day. A novel every few years."',
                image:"https://img.thriftbooks.com/api/images/l/1b43b00ef3daa1d843398f5e0fabcdbdd74a8d49.jpg",                
                author_id:Author.find_by(name:"Andrew Sean Greer").id,
                genre_id:Genre.find_by(name:"LGBTQIA+").id
        },
        {
                title:"Native Son",
                content:'"He felt that he had his destiny in his grasp. He was more alive then he could ever remember having been: his attention and mind were pointed, focused toward the goal."',
                image:"https://img.thriftbooks.com/api/images/l/25dd3385df80bb483e1bc26a7f9ef1dbd34e0e21.jpg",               
                author_id:Author.find_by(name:"Richard Wright").id,
                genre_id:Genre.find_by(name:"Black Diaspora").id
        },
        {
                title:"Othello",
                content:'"O, beware, my lord, of jealousy; it is the green-ey’d monster, which doth mock the meat it feeds on.”',
                image:"https://img.thriftbooks.com/api/images/l/caef7e7663357341c8b32c06fbe15e348d1d0b5b.jpg",                
                author_id:Author.find_by(name:"William Shakespeare").id,
                genre_id:Genre.find_by(name:"Drama").id
        },
        {
                title:"1984",
                content:'“It was a bright cold day in April, and the clocks were striking thirteen.”',
                image:"https://images-na.ssl-images-amazon.com/images/I/31lWUHDG7uL._SL300_.jpg",                
                author_id:Author.find_by(name:"George Orwell").id,
                genre_id:Genre.find_by(name:"Dystopian").id
        }

])

