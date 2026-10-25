function ProfilePhoto({
  src = '/images/nathaniel-profile.jpg',
  alt = 'Nathaniel Alvarez',
}) {
  return (
    <figure className="m-0 aspect-square w-full max-w-[150px] overflow-hidden rounded-[17px] bg-[#ececec] shadow-[0_18px_35px_rgba(0,0,0,0.10)]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full scale-[2] object-cover object-[50%_58%]"
      />
    </figure>
  );
}

export default ProfilePhoto;
