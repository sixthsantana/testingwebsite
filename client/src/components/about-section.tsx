const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">About Me</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            Driven by curiosity and creativity, I bridge the gap between technology and art
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://mail.google.com/mail/u/2?ui=2&ik=5af0a8980e&attid=0.1&permmsgid=msg-a:r7741272165887922734&th=197a977880890b45&view=fimg&fur=ip&permmsgid=msg-a:r7741272165887922734&sz=s0-l75-ft&attbid=ANGjdJ-O_KMT6JQORW82cLus9dkFlW_KWXvCvjHpBcrtkn76Fkb85u634aRxMUtB8tjtvB9YxNW7aZZL4WvkvMpK375GMqWnnj1tI2SlAL43dkLJ3ZlC_V_Kaqjw7GM&disp=emb&realattid=B9F13C59-ED8E-456F-A90B-29E1B5C49CE9&zw" 
              alt="Chris Taking Linkin Photos" 
              className="camera setup"
            />
          </div>
          <div className="space-y-6">
            <p className="text-portfolio-secondary text-lg leading-relaxed">
              My name is Chris Batista, and I'm currently attending University of Rhode Island as a Computer Science major with an interest in Photography and Videography. I’m passionate about both technology and visual storytelling - blending problem-solving skills from my CS studies with my creative drive as an aspiring photographer and videographer.

              </p>
              <p className="text-portfolio-secondary text-lg leading-relaxed">
              Through photography and video, I strive to capture real moments and emotion - whether it’s portraits, events, or behind-the-scenes content.

            </p>
            <p className="text-portfolio-secondary text-lg leading-relaxed">
              I’m always looking to grow, collaborate, and create work that leaves an impact - both through code and through the lens.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">4+</div>
                <div className="text-portfolio-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">500+</div>
                <div className="text-portfolio-secondary">Photos Captured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
