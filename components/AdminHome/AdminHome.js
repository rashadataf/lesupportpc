import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import AdminServices from "../../services/admin.services";

export default function AdminHome(props) {
  const router = useRouter();
  const [title, setTitle] = useState(props.aboutUs ? props.aboutUs.title : "");
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState(
    props.aboutUs ? props.aboutUs.content : ""
  );
  const [contentError, setContentError] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(
    props.aboutUs && props.aboutUs.imageUrl
      ? props.aboutUs.imageUrl.split("public").pop()
      : ""
  );

  function handleTitle(event) {
    setTitleError("");
    setTitle(event.target.value);
  }

  function handleContent(event) {
    setContentError("");
    setContent(event.target.value);
  }

  function handleImage(event) {
    if (event.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.onerror = (err) => console.log(err);
      reader.readAsDataURL(event.target.files[0]);
      setImage(event.target.files[0]);
    }
  }

  function validateInput() {
    let isValid = true;
    if (title.length === 0) {
      isValid = false;
      setTitleError("title can't be empty!");
    }
    if (content.length === 0) {
      isValid = false;
      setContentError("content can't be empty!");
    }
    return isValid;
  }

  async function handleSave() {
    if (validateInput()) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

      const result = await AdminServices.aboutUsServices.postAboutUs(formData);
      if (result) {
        router.reload();
        // setTitle("");
        // setContent("");
        // setImage("");
        // setImagePreview("");
        // setTitleError("");
        // setContentError("");
      }
    }
  }

  return (
    <div className="w-full">
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          className="p-3 bg-white rounded border-0 shadow outline-none focus:ring w-full"
        />
        {titleError && <p className="bg-red-300 p-3">{titleError}</p>}
      </div>
      <div className="mt-6">
        <textarea
          type="text"
          placeholder="Content"
          value={content}
          onChange={handleContent}
          className="p-3 bg-white rounded border-0 shadow outline-none focus:ring w-full pr-10"
        ></textarea>
        {contentError && <p className="bg-red-300 p-3">{contentError}</p>}
      </div>
      <div className="flex w-full bg-grey-lighter mt-6">
        <div className="flex flex-col w-full max-w-sm justify-between">
          <label className="flex justify-center flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-blue-400 hover:text-white w-40">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              type="file"
              className="hidden"
              onChange={handleImage}
              accept="image/*"
            />
          </label>
          {imagePreview && (
            <button
              className="flex mr-10 mt-10 font-bold p-4 items-center rounded-lg shadow-lg bg-white border hover:bg-red-400 hover:text-white w-40"
              onClick={() => {
                setImagePreview("");
                setImage("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8"
              >
                <g>
                  <path d="M12.754 7.242a.468.468 0 00-.469.469v8.848a.468.468 0 10.938 0V7.71a.47.47 0 00-.47-.469zm0 0M7.227 7.242a.467.467 0 00-.465.469v8.848a.467.467 0 10.933 0V7.71a.468.468 0 00-.468-.469zm0 0"></path>
                  <path d="M3.203 5.953v11.531c0 .684.25 1.325.688 1.782.433.46 1.039.722 1.671.726h8.856a2.324 2.324 0 001.676-.726c.433-.457.683-1.098.683-1.782V5.954a1.79 1.79 0 00-.457-3.52h-2.398v-.586A1.837 1.837 0 0012.07 0H7.91a1.837 1.837 0 00-1.852 1.848v.586H3.66a1.79 1.79 0 00-.457 3.52zm11.215 13.102H5.563c-.801 0-1.426-.688-1.426-1.57V5.991h11.707v11.492c0 .883-.625 1.57-1.426 1.57zM6.996 1.848a.885.885 0 01.266-.649.896.896 0 01.648-.262h4.16a.912.912 0 01.653.262.916.916 0 01.265.649v.586H6.996zM3.66 3.37h12.66a.842.842 0 110 1.684H3.66a.842.842 0 110-1.684zm0 0"></path>
                  <path d="M9.992 7.242a.468.468 0 00-.469.469v8.848a.468.468 0 10.934 0V7.71a.467.467 0 00-.465-.469zm0 0"></path>
                </g>
              </svg>
              <span className="ml-3">Delete</span>
            </button>
          )}
        </div>

        <div className="max-w-xs">
          {imagePreview && (
            <Image src={imagePreview} alt="image" width={300} height={250} />
          )}
        </div>
      </div>
      <div className="w-56">
        <button
          className="flex mt-10 font-bold px-4 py-4 items-center rounded-lg shadow-lg bg-green-400 hover:bg-green-600 hover:text-white"
          onClick={handleSave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-6 h-6"
            fill="currentColor"
          >
            <g>
              <path d="M19.867 3.77L16.23.133A.45.45 0 0015.91 0H1.816C.816 0 0 .816 0 1.816v16.368C0 19.184.816 20 1.816 20h16.368c1 0 1.816-.816 1.816-1.816V4.09a.45.45 0 00-.133-.32zM4.547.91h10v5.453c0 .5-.41.91-.91.91H5.453a.91.91 0 01-.906-.91zm11.816 18.18H3.637v-8.18h12.726zm2.727-.906c0 .5-.406.906-.906.906h-.91v-8.637a.454.454 0 00-.458-.453H3.184a.454.454 0 00-.457.453v8.637h-.91a.907.907 0 01-.907-.906V1.816c0-.5.406-.906.906-.906h1.82v5.453c0 1.004.817 1.82 1.817 1.82h8.184a1.819 1.819 0 001.816-1.82V.91h.27l3.367 3.367zm0 0"></path>
              <path d="M11.363 6.363h1.82c.25 0 .454-.203.454-.453V2.273a.454.454 0 00-.453-.457h-1.82a.454.454 0 00-.454.457V5.91c0 .25.203.453.453.453zm.453-3.636h.91v2.726h-.91zm0 0"></path>
            </g>
          </svg>
          <span className="ml-3">Save</span>
        </button>
      </div>
    </div>
  );
}
