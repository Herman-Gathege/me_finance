from datetime import datetime
import os

# Step 1: Get user input for salary in KES
def get_salary_input():
    while True:
        try:
            salary = float(input("Enter your monthly salary in KES: "))
            if salary <= 0:
                print("Salary must be a positive number. Please try again.")
            else:
                return salary
        except ValueError:
            print("Invalid input. Please enter a numerical value.")

# Step 2: Calculate budget allocation with focus on savings
def budget_allocation(salary):
    personal_needs = salary * 0.50
    savings = salary * 0.20
    debts = salary * 0.20
    investing = salary * 0.05
    risky_investments = salary * 0.05

    current_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = (
        f"Date: {current_date}\n"
        f"Total Salary: KES {salary}\n"
        f"Personal Needs (50%): KES {personal_needs}\n"
        f"Savings (20%): KES {savings}\n"
        f"Debts (20%): KES {debts}\n"
        f"Investing (5%): KES {investing}\n"
        f"Risky Investments (5%): KES {risky_investments}\n"
        f"{'-'*40}\n"
    )
    return log_entry, savings

# Step 3: Write log entry to file
def write_log(log_entry):
    with open("budget_log.txt", "a") as file:
        file.write(log_entry)

# Step 4: Read all entries from the log file
def read_log():
    if not os.path.exists("budget_log.txt"):
        print("No budget data found.")
        return

    with open("budget_log.txt", "r") as file:
        print("\n" + file.read())

# Step 5: Delete a specific entry based on date
def delete_entry(date_to_delete):
    if not os.path.exists("budget_log.txt"):
        print("No budget data found.")
        return

    with open("budget_log.txt", "r") as file:
        lines = file.readlines()

    with open("budget_log.txt", "w") as file:
        skip = False
        for line in lines:
            if date_to_delete in line:
                skip = True
            elif "----" in line:
                skip = False
            if not skip:
                file.write(line)
    print(f"Entry dated {date_to_delete} has been deleted.")

# Step 6: Main menu for user interaction
def main_menu():
    while True:
        print("\n--- Budget Management Menu ---")
        print("1. Add a new salary entry")
        print("2. View all entries")
        print("3. Delete an entry by date")
        print("4. Generate annual savings summary")
        print("5. Exit")
        choice = input("Choose an option (1-5): ")

        if choice == '1':
            salary = get_salary_input()
            log_entry, savings = budget_allocation(salary)
            write_log(log_entry)
            print("New entry added successfully.")

        elif choice == '2':
            read_log()

        elif choice == '3':
            date_to_delete = input("Enter the date of the entry to delete (YYYY-MM-DD): ")
            delete_entry(date_to_delete)

        elif choice == '4':
            generate_annual_summary()

        elif choice == '5':
            print("Exiting the program. Have a great day!")
            break

        else:
            print("Invalid choice. Please select a number between 1 and 5.")

# Step 7: Generate an annual savings summary
def generate_annual_summary():
    if not os.path.exists("budget_log.txt"):
        print("No budget data found to summarize.")
        return

    total_savings = 0
    entry_count = 0
    year_to_summarize = input("Enter the year for the summary (e.g., 2024): ")

    with open("budget_log.txt", "r") as file:
        for line in file:
            if f"Date: {year_to_summarize}" in line:
                # Look for the line that mentions "Savings" in this entry
                next_line = next(file)
                if "Savings" in next_line:
                    savings_value = float(next_line.split("KES ")[1])
                    total_savings += savings_value
                    entry_count += 1

    if entry_count == 0:
        summary_message = f"No savings data found for the year {year_to_summarize}.\n"
    else:
        summary_message = (
            f"\n{'='*40}\n"
            f"ANNUAL SAVINGS SUMMARY FOR {year_to_summarize}\n"
            f"Total Entries: {entry_count}\n"
            f"Total Savings: KES {total_savings}\n"
            f"{'='*40}\n"
        )

    print(summary_message)

    # Write the summary to the log file
    with open("budget_log.txt", "a") as file:
        file.write(summary_message)

# Run the program
if __name__ == "__main__":
    main_menu()
