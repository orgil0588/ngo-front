import React from "react";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import Batsukh from "../image/batsuh.png";
import Munkhtsog from "../image/munkhtsog.png";
import Batpurew from "../image/batpurew.png";

function About() {
  return (
    <div className="bg-primary-white">
      <Container>
        <Navbar />
        <div className="w-full">
          <div className="section-title mt-4">Амьдралын санхүү гэж юу вэ ?</div>
          <div className="font-normal text-md w-full text-center mx-auto my-4 text-primary-gray md:w-10/12 md:text-lg lg:w-8/12">
            Судалгаагаар Монгол Улсын хүн амын 30% нь зээлийн хүүгийн талаар
            мэдлэггүй, 60% инфляци хуримтлалд нь хэрхэн нөлөөлдгийг ойлгодоггүй,
            50% даатгалын талаар ойлголтгүй , 70% хөрөнгийн зах зээлийн талаар
            мэддэггүй ажээ. Дундаж Монгол айл жил бүр 1 сая төгрөгөөр өр
            нэмэгдэж орлогын тэгш бус байдал гүнзгийрэн дундаж давхарга ядуурлын
            ангалруу хальтран унасаар байна. Мөн зээлийн өндөр хүү, барьцаа
            хөрөнгийн шаардлагын улмаас жижиг дунд бизнесийн 70 гаруй хувь
            санхүүжилтийн гачигдалд орж улмаар 80 хувь нь эхний хоёр жилдээ
            дампуурч байна.
            <br />
            <span className="italic font-light">
              Санхүүгийн үйлчилгээний мөн чанар хүн мөнгөний төлөө амьдрах биш
              харин амьдралын сайн сайхныг бий болгохын төлөө мөнгө ашигладаг
              байхын төлөө билээ.
            </span>
            <br />
            Гэтэл энэ байдал өнөөгийн манай улсад эсрэгээрээ болж дан банк
            давамгайлсан, хэт төвлөрсөн санхүүгийн зах зээл хэрэглэгч хүн бүрт
            үр өгөөжтэй байж чадахгүй байгаа юм. Энэ байдлыг өөрчлөхийн тулд
            санхүүгийн үйлчилгээг хүртээмжтэй болгох, иргэдийн санхүүгийн
            чадамжийг сайжруулах шаардлагатай.
            <br />
            <span className="italic font-light">
              Чухам энэ зорилгын үүднээс “Санхүүгийн Хүртээмж-Хөгжил Санаачилга”
              нийгэмд үйлчилдэг ашгийн бус байгууллагаас “Амьдралын Санхүү”
              хөдөлгөөнийг өрнүүлж байна.
            </span>
          </div>
          <div className="font-semibold text-lg w-full text-center mx-auto my-4 text-primary-dark md:w-10/12 md:text-xl lg:w-8/12">
            Эрхэм зорилго, Алсын хараа :
          </div>
          <div className="font-normal text-md w-full text-center mx-auto my-4 text-primary-gray md:w-10/12 md:text-lg lg:w-8/12">
            Бидний нь эрхэм зорилго хүн бүр эдийн засгийн боломжоор хангагдсан
            санхүүгийн хувьд хүртээмжтэй нийгмийг бий болгох явдал юм. Хүмүүст
            амьдралаа дээшлүүлэхэд нь шаардлагатай санхүүгийн чадамжийг
            бүрдүүлэхэд туслах нь бидний алсын хараа юм. Санхүүгийн чадамж
            гэдгээр бид эдийн засаг, санхүүгийн наад захын ойлголтуудын талаар
            мэдлэгтэй, өрх гэр-хувийн санхүүгийн үр дүнтэй удирдах чадвартай,
            зөв хандлага дадалтай, хамгийн гол нь санхүүгийн хүртээмжтэй,
            шударга үйлчилгээг хэрэглэх боломжтой байхыг ойлгодог.
          </div>
        </div>
        <div className="mt-6">
          <div className="font-semibold text-lg w-full text-center mx-auto my-4 text-primary-dark md:w-10/12 md:text-xl lg:w-8/12">
            Удирдах зөвлөлийн гишүүд
          </div>
          <div className="w-full grid grid-cols-1 gap-4 mx-auto md:w-10/12 lg:grid-cols-2 xl:w-full xl:grid-cols-3 ">
            <div className="mx-4 flex flex-col  mx-auto items-center">
              <img className="w-60 h-60 rounded-full my-4" src={Batsukh} />
              <div className="text-center">
                <div className="font-medium text-primary-dark text-lg mb-4">
                  Цэрэндоржийн <span className="font-bold">Батсүх</span>
                </div>
                <div>
                  <span>Эдийн засагч </span> <br /> <br />
                  Санхүү Эдийн Засгийн Их Сургуулийн эдийн засаг,
                  эконометриксийн тэнхмийн профессор, доктор. Монголбанкны
                  Мөнгөний бодлогын зөвлөлийн гишүүн.
                </div>
              </div>
            </div>
            <div className="mx-4 flex flex-col  mx-auto items-center">
              <img className="w-60 h-60 rounded-full my-4" src={Munkhtsog} />
              <div className="text-center">
                <div className="font-medium text-primary-dark text-lg mb-4">
                  Алтанхүүгийн <span className="font-bold">Мөнхцог</span>
                </div>
                <div>
                  <span>Эдийн засагч </span> <br /> <br />
                  Хэрэглээний эдийн засаг, Санхүүгийн удирдлагын мэргэжилтэй.
                  “Сократус Стартап Студио” компанийн гүйцэтгэх захирал. Олон
                  нийтийн санхүүгийн боловсрол, гарааны бизнесийн удирдлагын
                  чиглэлээр мэргэшсэн.
                </div>
              </div>
            </div>
            <div className="mx-4 flex flex-col  mx-auto items-center">
              <img className="w-60 h-60 rounded-full my-4" src={Batpurew} />
              <div className="text-center">
                <div className="font-medium text-primary-dark text-lg mb-4">
                  Аюушсүрэнгийн <span className="font-bold">Батпүрэв</span>
                </div>
                <div>
                  <span>Санхүүгийн эдийн засагч, Бизнесийн зөвлөх </span> <br />{" "}
                  <br />
                  Монгол улсын Гадаад харилцааны яам, Санхүүгийн Зохицуулах
                  Хороо, Юнител групп, Скайтел групп зэрэг төр, хувийн хэвшлийн
                  байгууллагуудад 20 гаруй жил ажилласан туршлагатай. <br />{" "}
                  <br /> Тэрээр эдийн засагчийн хувьд санхүүгийн салбарын
                  хөгжил, нийтийн санхүү ба орлогын менежментийн сэдвээр
                  судалгаа хийдэг бол бизнесийн зөвлөхийн хувьд стратеги
                  удирдлага, маркетингийн чиглэлээр мэргэшсэн.
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
