import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl md:text-3xl sticky top-0 right-0 left-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
          <span>Connectons</span>
        </h1>
        <div className=" overflow-auto h-[85vh] pb-14 md:pb-8 px-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          facere est error doloribus qui modi quia laborum velit cupiditate
          possimus eligendi quod, assumenda reprehenderit animi. Perferendis ad
          placeat neque? Sint inventore labore vitae culpa praesentium omnis
          fugit aut consectetur! Quos qui voluptas in deserunt officiis placeat
          illo eum mollitia sunt ex laudantium consectetur eaque temporibus
          rerum, atque suscipit autem sit a provident hic minus? Autem corrupti
          quod ipsam soluta! Laborum, nobis. Aspernatur deleniti veritatis
          ratione aut ducimus laborum, ipsum cumque voluptas voluptatibus
          tempore rerum distinctio quos, a doloribus animi architecto
          consectetur impedit modi molestias. Sint, quae mollitia. Tempore,
          excepturi quam?
        </div>
      </div>
    </>
  );
};

export default page;
