function ProfileImage() {
  const handleImageError = e => {
    e.target.style.display = 'none';
    const fallback = e.target.nextElementSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <div className="relative mb-8">
      <img
        src="/profile-picture.JPG"
        alt="Maria (Bazhena) Dementyeva"
        className="profile-picture"
        loading="eager"
        decoding="sync"
        onError={handleImageError}
      />
      <div
        className="profile-picture bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center text-theme-accent text-4xl font-bold font-heading"
        style={{ display: 'none' }}
      >
        MD
      </div>
    </div>
  );
}

export default ProfileImage;
