export const STEPS_BUTTONS = {
    back: {
      classes: "back-button",
      secondary: true,
      text: "Back",
      type: "back"
    },
    cancel: {
      classes: "cancel-button",
      secondary: true,
      text: "Exit",
      type: "cancel"
    },
    next: {
      classes: "next-button",
      text: "Next",
      type: "next"
    },
    finish: {
        classes: "finish-button",
        text: "Finish",
        type: "next"
      }
  };
  
  export const defaultStepOptions = {
    classes:'class-1 class-2',
    scrollTo: true,
    cancelIcon: {
      enabled: true
    }
  };

  export const addSteps = [
    {
        id: 'step-1',
        title: "Welcome To Our Tour App",
        text: 'Tailor your travel experience with handpicked destinations, activities, and accommodations suited to your preferences.',
        attachTo: {
            element: '#step-1',
        },
        buttons: [STEPS_BUTTONS.next],
        
      },
      {
        id: 'step-2',
        title: "Choose a Destination",
        text: 'Select a destination that aligns with the interests and preferences of the group.',
        attachTo: {
            element: '#step-2',
        },
        buttons: [
          STEPS_BUTTONS.next
        ],
       
      },
      {
        id: 'Set a Budget',
        title: "Book Transportation and Accommodation",
        text: 'Determine a budget covering transportation, accommodation, meals, and activities.',
        attachTo: {
            element: '#step-3',
        },
        buttons: [STEPS_BUTTONS.next],
      },
      {
        id: 'step-3',
        title: "Book Transportation and Accommodation",
        text: 'Secure transportation to and from the destination, and book suitable accommodations.',
        attachTo: {
            element: '#step-4',
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-5',
        title: "Plan Activities",
        text: 'Outline key activities or attractions for each day of the tour.',
        attachTo: {
            element: '#step-5',
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-6',
        title: "Communicate and Confirm",
        text: 'Share the itinerary with participants, confirm bookings, and ensure everyone is prepared for the tour.',
        attachTo: {
            element: '#step-6',
        },
        buttons: [STEPS_BUTTONS.next],
        classes: "custom-class-name-1 custom-class-name-2",
      },
      {
        id: 'step-7',
        title: "Start Your Journey",
        text: 'Share the itinerary with participants, confirm bookings, and ensure everyone is prepared for the tour.',
        attachTo: {
            element: '#step-7',
        },
        buttons: [STEPS_BUTTONS.finish],
        classes: "custom-class-name-1 custom-class-name-2",
      }
  ];
  
  