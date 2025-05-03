import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const HomePage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter py-4">
              Treat your Menstrual Cycle with ease
            </h1>
            <p className="text-pink-600 font-extrabold mt-2 sm:mt-4 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
              Log your period, Track symptoms, and get smart insights about your
              cycle
            </p>
          </div>
        </section>
        {/* banner */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <img
              src="https://thumbs.dreamstime.com/b/happy-woman-blue-dress-summer-hat-holding-empty-blank-big-red-heart-female-periods-calendar-checking-menstruation-happy-woman-139366293.jpg"
              alt="Period tracker illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        {/* Cards */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-pink-50 border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle>Smart Predictions</CardTitle>
                <CardDescription>
                  Get Personalized insights based on your cycle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-pink-50 border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle>Discuss with Gynec</CardTitle>
                <CardDescription>
                  Share accurate data with your doctor
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-pink-50 border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle>Listen to your Body</CardTitle>
                <CardDescription>
                  Track symptoms Patterns effortlessly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-pink-50 border-pink-100 shadow-sm">
              <CardHeader>
                <CardTitle>Stay Prepared</CardTitle>
                <CardDescription>
                  Know when your Period and Ovulation are coming
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        {/*  */}
        <div className="flex gap-6 justify-center">
          <p className="text-sm text-gray-500">
            Please note that your data stays private and secure.You can
            update or delete it anytime
          </p>
        </div>
        {/* Button */}
        <div className="flex gap-6 justify-center">
          <Link to="/fill-your-info">
            <Button variant={'blue'} size={'xl'}>
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};
