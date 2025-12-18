import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const telegramBotUrl = "https://t.me/rvp_urfu_bot";

  const features = [
    {
      icon: "MessageCircleQuestion",
      title: "Ответы на частые вопросы",
      description: "Получите информацию о РВП без поиска по форумам и соцсетям"
    },
    {
      icon: "FileText",
      title: "Список документов и сроки",
      description: "Точный перечень документов и актуальные даты подачи"
    },
    {
      icon: "Bell",
      title: "Информация об изменениях",
      description: "Узнавайте о важных обновлениях в правилах первыми"
    },
    {
      icon: "Users",
      title: "Живая поддержка",
      description: "Задайте свой вопрос модератору и получите персональный ответ"
    },
    {
      icon: "Clock",
      title: "Умные напоминания",
      description: "Не пропустите важные даты и дедлайны"
    },
    {
      icon: "CheckCircle",
      title: "Пошаговые инструкции",
      description: "Четкий план действий для каждого этапа оформления РВП"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Выберите язык",
      description: "Откройте бота в Telegram и выберите русский или английский"
    },
    {
      number: "02",
      title: "Найдите нужный раздел",
      description: "Документы, сроки, изменения в правилах, вопросы или напоминания"
    },
    {
      number: "03",
      title: "Получите информацию",
      description: "Узнайте что подготовить, когда и куда идти за пару кликов"
    },
    {
      number: "04",
      title: "Задайте вопрос",
      description: "Если стандартный ответ не подходит, получите личную консультацию"
    }
  ];

  const testimonials = [
    {
      name: "Анна",
      country: "Казахстан",
      text: "Бот помог не ехать зря в миграционную службу — узнала точные часы приёма и сэкономила время"
    },
    {
      name: "Джон",
      country: "Нигерия",
      text: "90% моих вопросов закрылись готовой информацией, а на личный вопрос ответили быстро"
    },
    {
      name: "Мария",
      country: "Узбекистан",
      text: "Напоминания о дедлайнах помогли ничего не забыть. Прошла первую подачу с первой попытки"
    },
    {
      name: "Ахмед",
      country: "Египет",
      text: "Раньше полагался на слухи от других студентов. Теперь есть проверенный источник информации"
    }
  ];

  const useCases = [
    {
      title: "Первая подача",
      description: "Студент только приехал, через бот узнаёт список документов, сроки и адрес кабинета, включает напоминание и подаёт с первой попытки"
    },
    {
      title: "Возвращение с каникул",
      description: "Студент проверяет, изменились ли правила за время его отсутствия, задаёт уточняющий вопрос и быстро понимает, что делать"
    },
    {
      title: "Премиум-сопровождение",
      description: "Для тех, кто очень боится ошибиться или плохо говорит по-русски, бот ведёт по шагам и напоминает о каждом действии"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              RVP-Urfu — твой помощник по РВП в УрФУ 24/7
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Никакой паники, никаких сюрпризов — только понятные шаги и актуальная информация о РВП прямо в Telegram
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto mb-4"
              onClick={() => window.open(telegramBotUrl, '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Открыть бота в Telegram
            </Button>
            <p className="text-sm text-muted-foreground">
              Помогаем иностранным студентам УрФУ оформить РВП без ошибок и хаоса
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Что это за бот
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                RVP-Urfu — это личный помощник по оформлению разрешения на временное проживание (РВП) 
                для иностранных студентов УрФУ, который работает в Telegram 24/7.
              </p>
              <p>
                Бот объединяет в одном месте ответы на частые вопросы, актуальные изменения в правилах, 
                пошаговые инструкции и напоминания о сроках. Вся информация структурирована и доступна 
                в несколько кликов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Какую проблему решает
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Сейчас иностранным студентам сложно найти понятную и свежую информацию по РВП. 
                Они полагаются на слухи от знакомых, узнают об изменениях в правилах уже на месте 
                в миграционной службе, тратят время и деньги из-за ошибок в документах или пропущенных сроков.
              </p>
              <p>
                RVP-Urfu превращает Telegram в единый источник истины: вся информация собрана в одном месте, 
                регулярно обновляется, есть четкие шаги «что, когда, куда». Если стандартного ответа недостаточно — 
                работает живая поддержка модератора.
              </p>
              <p>
                Бот напоминает о важных датах, помогает не забыть дедлайны и подготовить документы вовремя. 
                Результат — спокойствие, контроль над процессом и оформление РВП без хаоса.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Основные возможности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Как работает бот
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Для кого этот сервис
          </h2>
          <div className="mx-auto max-w-3xl">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Кому подойдет RVP-Urfu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">
                    Иностранные студенты УрФУ бакалавриата и магистратуры, которые подают на РВП впервые
                  </p>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">
                    Те, кто вернулся с каникул и срочно продлевает РВП
                  </p>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">
                    Студенты с базовыми вопросами о документах, сроках и правилах
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Бот не рассчитан на граждан РФ, студентов других вузов и людей без связи с УрФУ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Бесплатно</CardTitle>
                <CardDescription className="text-lg">Для всех студентов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Основная информация о документах и сроках</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Актуальные изменения в правилах</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Базовые напоминания о дедлайнах</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Возможность задать вопрос модератору</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold">
                Популярно
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Премиум-сопровождение</CardTitle>
                <CardDescription className="text-lg">100-150 руб/месяц</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Приоритетные ответы модератора (15-30 минут)</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Персональный чек-лист под вашу ситуацию</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Умные пошаговые напоминания</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Мини-консультация через чат</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Полный контроль над процессом</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Как бот помогает в жизни
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Отзывы студентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Оформите РВП спокойно и без хаоса
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              RVP-Urfu помогает иностранным студентам УрФУ пройти все шаги уверенно. 
              Откройте бота, задайте свой вопрос и получите актуальную информацию
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto mb-4"
              onClick={() => window.open(telegramBotUrl, '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Открыть бота в Telegram
            </Button>
            <p className="text-sm text-muted-foreground">
              Бот работает бесплатно, при желании можно подключить Премиум-сопровождение
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>RVP-Urfu — помощник для иностранных студентов УрФУ по оформлению РВП</p>
        </div>
      </footer>
    </div>
  );
}
