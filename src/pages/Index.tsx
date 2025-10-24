import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { 
      title: 'Признание в чувствах', 
      artist: 'Для тебя', 
      duration: '3:45',
      url: 'https://media.vocaroo.com/mp3/1kEVKVHGpMI1'
    },
    { 
      title: 'Вторая песня', 
      artist: 'От сердца', 
      duration: '4:12',
      url: 'https://media.vocaroo.com/mp3/17uASs72c0Eg'
    },
    { 
      title: 'Третья песня', 
      artist: 'С любовью', 
      duration: '3:58',
      url: 'https://media.vocaroo.com/mp3/1enB4SfNryJW'
    },
  ];

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Ошибка воспроизведения:', error);
          setIsPlaying(false);
        }
      }
    }
  };

  const playTrack = async (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentTrack(index);
      setIsPlaying(false);
      
      await new Promise(resolve => setTimeout(resolve, 200));
      
      audioRef.current.load();
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Ошибка загрузки трека:', error);
        setIsPlaying(false);
      }
    }
  };

  const galleryPhotos = [
    'https://cdn.poehali.dev/projects/e7a9730d-fe78-4f96-b4fc-2e6887094184/files/5fb5b2be-6e05-4e9b-af9c-7365ca13e561.jpg',
    'https://cdn.poehali.dev/projects/e7a9730d-fe78-4f96-b4fc-2e6887094184/files/b121ae76-f706-48b1-9c0a-767ba0f13b19.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e8] via-[#ebe4d8] to-[#e8dfd0] relative">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
          isPlaying ? 'opacity-60 scale-105' : 'opacity-50 scale-100'
        }`}
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/b275f3da-636f-497b-ac64-e1fccd26f026.jpg)' }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">
            Ты — моё всё
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground max-w-3xl leading-relaxed">
            Каждое мгновение с тобой наполнено счастьем. Ты делаешь мою жизнь ярче, теплее и прекраснее.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => setShowLetter(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6"
            >
              <Icon name="Heart" className="mr-2" />
              Прочитать письмо
            </Button>
            <Button
              onClick={() => setShowGallery(true)}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-xl px-8 py-6"
            >
              <Icon name="Image" className="mr-2" />
              Наши моменты
            </Button>
          </div>
        </section>

        <section className="py-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Card className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
            <h2 className="text-5xl font-bold text-center mb-8 text-primary">
              Видео-послание для тебя
            </h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Icon name="Play" size={64} className="mx-auto text-primary" />
                <p className="text-lg text-muted-foreground">
                  Загрузите своё видео-послание
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Upload" className="mr-2" />
                  Загрузить видео
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="py-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Icon name="Music" size={32} className="text-primary" />
                <h2 className="text-4xl font-bold text-primary">Мои песни для тебя</h2>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-6">
                <div className={`w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center ${
                  isPlaying ? 'animate-pulse' : ''
                }`}>
                  <Icon name="Music2" size={48} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {playlist[currentTrack].title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{playlist[currentTrack].artist}</p>
                  <div className="mt-3 bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full w-1/3 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => playTrack(currentTrack > 0 ? currentTrack - 1 : playlist.length - 1)}
                >
                  <Icon name="SkipBack" size={24} />
                </Button>
                
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Icon name="Pause" size={32} className="text-primary-foreground" />
                  ) : (
                    <Icon name="Play" size={32} className="text-primary-foreground" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => playTrack(currentTrack < playlist.length - 1 ? currentTrack + 1 : 0)}
                >
                  <Icon name="SkipForward" size={24} />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              {playlist.map((track, index) => (
                <div
                  key={index}
                  onClick={() => playTrack(index)}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                    currentTrack === index
                      ? 'bg-primary/20 border-2 border-primary'
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/30 rounded flex items-center justify-center">
                      {currentTrack === index && isPlaying ? (
                        <Icon name="Volume2" size={20} className="text-primary animate-pulse" />
                      ) : (
                        <span className="text-primary font-bold">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{track.title}</p>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground">{track.duration}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="py-20 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="max-w-3xl mx-auto p-12 bg-white/90 backdrop-blur-sm shadow-2xl">
            <Icon name="Feather" size={48} className="mx-auto text-primary mb-8 animate-pulse" />
            <div className="space-y-6 text-left leading-relaxed">
              <p className="text-xl text-foreground italic">
                Твои глаза горят игриво,<br />
                Лаская жадно небосвод,<br />
                Своей улыбкою счастливой,<br />
                Меня уносишь от невзгод.
              </p>
              <p className="text-xl text-foreground italic">
                В тебе, ликуя, Афродита,<br />
                Превносит в жизнь мою фурор,<br />
                Одежда вишнями расшита,<br />
                Дополнив красками узор.
              </p>
              <p className="text-xl text-foreground italic">
                И весело волной струится,<br />
                Твой голос звонкий на ветру,<br />
                Прогнать скорее он стремится,<br />
                Долой осеннюю хандру.
              </p>
              <p className="text-xl text-foreground italic">
                Сокрою тайное желанье,<br />
                Замок повешу на груди,<br />
                Чернил исчезнет след признанья,<br />
                В тетради, что я возводил.
              </p>
              <p className="text-xl text-foreground italic">
                Пускай в словах я не уверен,<br />
                Не смел я в действиях своих,<br />
                Но лишь тебе одной намерен,<br />
                Чеканить рифмами я стих.
              </p>
              <p className="text-xl text-foreground italic">
                Она быть может посмеётся,<br />
                Но жизнь лишь нам одна дана,<br />
                И ты, покуда сердце бьётся,<br />
                Как воздуха глоток нужна..
              </p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Icon name="Heart" size={24} className="text-primary" />
              <Icon name="Heart" size={24} className="text-primary" />
              <Icon name="Heart" size={24} className="text-primary" />
            </div>
          </Card>
        </section>
      </div>

      <Dialog open={showLetter} onOpenChange={setShowLetter}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center text-primary mb-4">
              Моё письмо тебе
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>Моя дорогая,</p>
            <p>
              Каждый день с тобой — это подарок. Когда я просыпаюсь и понимаю, что ты в моей жизни,
              моё сердце наполняется невероятным счастьем.
            </p>
            <p>
              Твоя улыбка освещает даже самые тёмные дни. Твой смех — это самая прекрасная мелодия,
              которую я когда-либо слышал. Твоя доброта вдохновляет меня становиться лучше.
            </p>
            <p>
              Я благодарен судьбе за каждое мгновение, проведённое рядом с тобой. За каждый разговор,
              каждое объятие, каждый взгляд. Ты делаешь меня счастливым просто своим существованием.
            </p>
            <p>
              Я хочу, чтобы ты знала: моя любовь к тебе безгранична. Ты — моя вторая половинка,
              моя лучшая подруга, моя любовь.
            </p>
            <p className="text-center text-2xl font-bold text-primary mt-8">
              Я люблю тебя больше слов ❤️
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-center text-primary mb-4">
              Наши незабываемые моменты
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={photo}
                  alt={`Момент ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <Card className="aspect-square flex items-center justify-center bg-muted/50 border-dashed border-2 border-primary/30">
              <div className="text-center space-y-2">
                <Icon name="Plus" size={48} className="mx-auto text-primary/50" />
                <p className="text-muted-foreground">Добавить фото</p>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

      <audio 
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={playlist[currentTrack].url} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Index;