import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [posts, setProducts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('/posts');
        setProducts(response.data);
        console.log(response.data);
    };

    return (
        <div className='flex flex-col items-center p-8'>
            <div key={posts.id} className='text-3xl font-bold'>About Us</div>
            <div className='mt-5 text-justify'>
            &emsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quod voluptas tempora nam. Fugiat magnam obcaecati iusto corporis cumque aspernatur repellat aliquid? Cupiditate optio obcaecati doloremque modi quidem eos quisquam nemo itaque eius! Libero quis sunt voluptates suscipit autem blanditiis quos. Expedita vero repellat accusamus eligendi sunt iure maiores officiis consequuntur, molestiae numquam illum aut magnam ipsam dolore tenetur dignissimos dicta sequi pariatur consectetur? Odio alias dicta nam et harum. Sed officiis ipsam necessitatibus. Facilis dolore, dicta vel omnis debitis ullam modi dignissimos eius maxime laboriosam, consectetur quae suscipit laudantium quidem, fugit optio. Veniam voluptate ab, ipsa amet quidem explicabo id temporibus! Exercitationem temporibus, eum magnam, explicabo omnis deleniti veritatis excepturi recusandae corporis ea dignissimos. Est, dicta illo! Consequuntur doloremque enim, cum officia ullam nihil quo maiores debitis ducimus architecto, nisi eaque culpa, obcaecati id magni sit cumque tempore aspernatur. Eos ab voluptates rem consectetur, dolore saepe sapiente ullam, at magni, molestias vitae officia. Maxime ad, cumque reprehenderit asperiores earum laborum ipsa aut fugit voluptates ea assumenda sapiente rerum neque, repellendus in suscipit voluptatum officia minima velit eius voluptatibus ex? Dolorem itaque deleniti id distinctio, quos dolore non quis maxime cum aliquam voluptate totam qui error magnam sint doloribus quam expedita, suscipit sequi repudiandae repellendus optio eaque? Maiores et aut ipsa asperiores eos atque quibusdam corrupti odit! Facere voluptates, esse fugiat quaerat, sed officia ratione deleniti, quia quae quo recusandae culpa placeat mollitia dolore dolor inventore expedita quisquam nemo perspiciatis rerum vero omnis?
            <br /> <br />
            &emsp; Ipsam hic porro nobis velit voluptatibus! Nisi, iste magni dignissimos excepturi accusantium sequi ea laudantium dicta illum tempore aperiam labore ut cumque aliquam mollitia minima, nam voluptate eveniet? Eius mollitia quisquam commodi facilis omnis esse aliquid, voluptates, expedita libero fugiat inventore itaque aspernatur enim. Consequuntur temporibus inventore deleniti, quae ea eligendi eum veniam omnis, id sequi dolorem quos laborum. Quae incidunt cum hic soluta voluptas autem a aperiam itaque modi esse natus corrupti ipsum recusandae blanditiis sequi, quasi perspiciatis facere nam unde! Pariatur rem vel, voluptates id mollitia obcaecati reprehenderit eos qui a at ex voluptatum provident laudantium rerum placeat numquam aliquid exercitationem ipsa officiis adipisci, maxime eius fugiat quisquam ab! Nam id pariatur fuga asperiores ipsa quidem corporis aspernatur, qui quam expedita quod voluptatem cumque, repellat similique sit iure optio. Nobis ab odio cum reprehenderit. Suscipit perferendis sapiente distinctio, ullam harum rem beatae! Quibusdam labore sunt harum doloribus libero tenetur delectus quidem veniam laborum nesciunt consequuntur, voluptatem adipisci ad quaerat, iste consequatur? Rerum dolorum ex iste rem! Enim harum assumenda et autem in adipisci dignissimos, animi, dolore reiciendis nam omnis molestiae, voluptatem sed ullam? Saepe id architecto nisi aliquam at exercitationem iste eius tempore hic animi! At molestias laudantium autem quia quo cum nulla vel numquam, quibusdam sapiente quae harum deserunt eligendi eum error quis architecto explicabo modi debitis soluta tempora. Eligendi voluptas itaque, aperiam debitis non atque qui repellendus facilis. Itaque amet consequuntur nostrum voluptates consectetur qui id perspiciatis beatae numquam. Debitis repudiandae repellat illum incidunt quae deleniti iure exercitationem suscipit? Illo voluptatem possimus fuga.</div>
        </div>
    )
}

export default Home;