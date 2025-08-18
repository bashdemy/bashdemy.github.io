import { useState } from 'react';
import Image from 'next/image';

function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative mb-8">
      {!hasError ? (
        <Image
          src="/profile-picture.JPG"
          alt="Maria (Bazhena) Dementyeva"
          width={400}
          height={400}
          className="profile-picture"
          priority
          onError={() => setHasError(true)}
        />
      ) : null}
      {hasError ? (
        <div className="profile-picture bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center text-theme-accent text-4xl font-bold font-heading">
          MD
        </div>
      ) : null}
    </div>
  );
}

export default ProfileImage;
