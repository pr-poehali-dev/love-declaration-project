import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const galleryPhotos = [
    'https://cdn.poehali.dev/projects/e7a9730d-fe78-4f96-b4fc-2e6887094184/files/5fb5b2be-6e05-4e9b-af9c-7365ca13e561.jpg',
    'https://cdn.poehali.dev/projects/e7a9730d-fe78-4f96-b4fc-2e6887094184/files/b121ae76-f706-48b1-9c0a-767ba0f13b19.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] via-[#E5DEFF] to-[#FDE1D3]">
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

        <section className="py-20 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto space-y-6">
            <Icon name="Sparkles" size={48} className="mx-auto text-primary animate-pulse" />
            <h3 className="text-4xl font-bold text-primary">
              С каждым днём я люблю тебя всё больше
            </h3>
            <p className="text-xl text-primary-foreground">
              Спасибо, что ты есть в моей жизни. Ты — мой свет, моя радость, моя любовь.
            </p>
          </div>
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
    </div>
  );
};

export default Index;
