import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

type Condition =
  | 'PCOS'
  | 'Endometriosis'
  | 'UTI'
  | 'Peri/menopause/Menopause'
  | 'Uterine Fibroids'
  | 'Anemia'
  | 'Bleeding Disorder'
  | 'Fibromyalgia'
  | 'IBS (Irritable Bowel Syndrome)'
  | 'Pregnancy'
  | 'Postpartum/breastfeeding'
  | 'None';

export const PeriodTracker = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lastPeriodDate: new Date(),
    cycleLength: 28,
    periodLength: 5,
    conditions: [] as Condition[],
  });

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData({ ...formData, lastPeriodDate: date });
    }
  };

  const handleCycleLengthChange = (value: number[]) => {
    setFormData({ ...formData, cycleLength: value[0] });
  };

  const handlePeriodLengthChange = (value: number[]) => {
    setFormData({ ...formData, periodLength: value[0] });
  };

  const toggleCondition = (condition: Condition) => {
    setFormData({
      ...formData,
      conditions: formData.conditions.includes(condition)
        ? formData.conditions.filter((c) => c !== condition)
        : [...formData.conditions, condition],
    });
  };

  const handleSubmit = async () => {
    try {
      // Here you would handle the submission to Supabase
      // Example:
      // await supabase.from('period_tracker').insert(formData);

      // Navigate to dashboard or next page
      navigate('/track-your-cycle');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const conditions: Condition[] = [
    'None',
    'PCOS',
    'Endometriosis',
    'UTI',
    'Peri/menopause/Menopause',
    'Uterine Fibroids',
    'Anemia',
    'Bleeding Disorder',
    'Fibromyalgia',
    'IBS (Irritable Bowel Syndrome)',
    'Pregnancy',
    'Postpartum/breastfeeding',
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="text-center">
              <CardTitle>When did your last period start?</CardTitle>
              <CardDescription>We can predict your next period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(formData.lastPeriodDate, 'MMMM yyyy')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.lastPeriodDate}
                        onSelect={handleDateChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleNext}>
                Next
              </Button>
            </CardFooter>
          </Card>
        );
      case 2:
        return (
          <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="text-center">
              <CardTitle>How long is your average cycle?</CardTitle>
              <CardDescription>
                A little help: Cycle usually runs 21-35 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full flex justify-center">
                  <span className="text-4xl font-semibold text-center">
                    {formData.cycleLength}
                  </span>
                </div>
                <div className="w-full px-4">
                  <Slider
                    defaultValue={[formData.cycleLength]}
                    min={21}
                    max={35}
                    step={1}
                    onValueChange={handleCycleLengthChange}
                  />
                </div>
                <div className="flex justify-between w-full px-2">
                  <span className="text-sm text-gray-500">21</span>
                  <span className="text-sm text-gray-500">28</span>
                  <span className="text-sm text-gray-500">35</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        );
      case 3:
        return (
          <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="text-center">
              <CardTitle>How long does your period last?</CardTitle>
              <CardDescription>
                Most periods last 3-7 days, but it's okay if yours doesn't
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full flex justify-center">
                  <span className="text-4xl font-semibold text-center">
                    {formData.periodLength}
                  </span>
                </div>
                <div className="w-full px-4">
                  <Slider
                    defaultValue={[formData.periodLength]}
                    min={1}
                    max={10}
                    step={1}
                    onValueChange={handlePeriodLengthChange}
                  />
                </div>
                <div className="flex justify-between w-full px-2">
                  <span className="text-sm text-gray-500">1</span>
                  <span className="text-sm text-gray-500">5</span>
                  <span className="text-sm text-gray-500">10</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        );
      case 4:
        return (
          <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="text-center">
              <CardTitle>Any conditions affecting your cycle?</CardTitle>
              <CardDescription>
                Sharing helps you receive more accurate insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {conditions.map((condition) => (
                  <Badge
                    key={condition}
                    className={cn(
                      'cursor-pointer py-2 px-3',
                      formData.conditions.includes(condition)
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800',
                    )}
                    onClick={() => toggleCondition(condition)}
                  >
                    {condition}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Add Some Information</h1>
          </div>
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

