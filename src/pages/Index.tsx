import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-8 animate-bounce">
              <Icon name="Sparkles" size={32} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-fade-in">
              Творческие Услуги
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
              Воплощаем ваши идеи в жизнь с помощью креативных решений и
              индивидуального подхода
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Посмотреть работы
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Мои Услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Предлагаю широкий спектр творческих услуг для воплощения ваших идей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "Palette",
              title: "Графический дизайн",
              description:
                "Создание логотипов, брендинга, печатной продукции и визуальной айдентики",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: "Camera",
              title: "Фотография",
              description:
                "Портретная, предметная и коммерческая съемка с профессиональной обработкой",
              color: "from-pink-500 to-pink-600",
            },
            {
              icon: "Video",
              title: "Видеопродакшн",
              description:
                "Создание рекламных роликов, анимации и видеоконтента для социальных сетей",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: "Pen",
              title: "Иллюстрация",
              description:
                "Авторские иллюстрации, концепт-арт и персонажи для различных проектов",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: "Monitor",
              title: "Веб-дизайн",
              description:
                "Дизайн сайтов, лендингов и мобильных приложений с UX/UI подходом",
              color: "from-pink-500 to-orange-500",
            },
            {
              icon: "Lightbulb",
              title: "Креативные решения",
              description:
                "Нестандартные подходы к решению творческих задач и брендинговых вызовов",
              color: "from-orange-500 to-purple-500",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-black/20 border-white/10 hover:bg-black/30 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Портфолио
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Избранные работы, которые демонстрируют мой творческий подход
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Брендинг кафе",
              category: "Графический дизайн",
              image: "/placeholder.svg",
            },
            {
              title: "Фотосессия продукта",
              category: "Фотография",
              image: "/placeholder.svg",
            },
            {
              title: "Анимационный ролик",
              category: "Видеопродакшн",
              image: "/placeholder.svg",
            },
            {
              title: "Персонаж для игры",
              category: "Иллюстрация",
              image: "/placeholder.svg",
            },
            {
              title: "Интернет-магазин",
              category: "Веб-дизайн",
              image: "/placeholder.svg",
            },
            {
              title: "Креативная кампания",
              category: "Креативные решения",
              image: "/placeholder.svg",
            },
          ].map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-purple-300 font-semibold">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готов воплотить ваши идеи в жизнь. Свяжитесь со мной для обсуждения
            проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "Mail",
              title: "Email",
              value: "hello@creative.com",
              action: "mailto:hello@creative.com",
            },
            {
              icon: "Phone",
              title: "Телефон",
              value: "+7 (999) 123-45-67",
              action: "tel:+79991234567",
            },
            {
              icon: "Instagram",
              title: "Instagram",
              value: "@creative_studio",
              action: "https://instagram.com",
            },
            {
              icon: "MessageCircle",
              title: "Telegram",
              value: "@creative_designer",
              action: "https://t.me",
            },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className="group p-6 rounded-lg bg-black/20 border border-white/10 hover:bg-black/30 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={contact.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 animate-pulse">
            <Icon name="Rocket" size={24} className="text-white" />
          </div>
          <p className="text-lg text-gray-300 mb-8">
            Готовы начать творческое сотрудничество? Давайте создадим что-то
            удивительное вместе!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Обсудить проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
