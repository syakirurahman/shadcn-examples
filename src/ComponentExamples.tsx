import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { Button } from "./components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Checkbox } from "./components/ui/checkbox";
import { Switch } from "./components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Input } from "./components/ui/input";
import { Alert, AlertDescription } from "./components/ui/alert";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Textarea } from "./components/ui/textarea";

const ComponentExamples = () => {
  const occupationList = [
    {
      value: "Frontend Engineer",
      label: "Frontend Engineer",
    },
    {
      value: "Backend Engineer",
      label: "Backend Engineer",
    },
    {
      value: "Fullstack Engineer",
      label: "Fullstack Engineer",
    },
    {
      value: "Technical Writer",
      label: "Technical Writer",
    },
    {
      value: "Developer Advocate",
      label: "Developer Advocate",
    },
    {
      value: "UI/UX Designer",
      label: "UI/UX Designer",
    },
    {
      value: "QA Engineer",
      label: "QA Engineer",
    },
  ];

  return (
    <div style={{ maxWidth: "640px", margin: "1rem auto" }}>
      <h1>Shadcn component examples</h1>
      <form>
        <Alert style={{ marginBottom: "1rem" }}>
          <AlertDescription>This is a Shadcn default Alert</AlertDescription>
        </Alert>
        <div style={{ marginBottom: "1rem" }}>
          <label>Full name</label>
          <Input placeholder="Insert your full name" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <Input placeholder="Insert your email" type="email" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Gender</label>
          <br />
          <RadioGroup
            defaultValue="female"
            style={{ display: "flex", gap: "1rem" }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </RadioGroup>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Occupation</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Occupation</SelectLabel>
                {occupationList.map((val) => (
                  <SelectItem value={val.value}>{val.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Bio</label>
          <Textarea placeholder="Describe yourself" rows={2} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div className="flex items-center gap-2">
            <Switch defaultChecked /> <label>This is switch component</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked />{" "}
            <label>This is checkbox component</label>
          </div>
        </div>
        <br />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <label>Hover me to show tooltip</label>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a Shadcn tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Save (Open Modal)</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Lorem ipsum dolor sit amet</AlertDialogTitle>
                <AlertDialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et massa at orci ultrices facilisis. Donec id
                  viverra ante, a mollis odio. Morbi nec vulputate urna, sit
                  amet pulvinar tortor.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </div>
  );
};

export default ComponentExamples;
