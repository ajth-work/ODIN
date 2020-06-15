class Account
  attr_reader :name
  attr_reader :balance
  def initialize(balance=100)
    print "Enter your name: "
    @name = gets.chomp
    print "Hello, #{name}! "
    @balance = balance
    if @pin == nil
      create_pin()
      puts "Welcome to your new account!"
      puts "Current balance: $#{@balance}."
      user_options()
    else
      check_pin()
    end
  end

  private
  def create_pin()
    print "Create a PIN: "
    @pin = Integer(gets.chomp)
  end

  private
  def pin_error()
    return "Access denied: incorrect PIN."
  end

  public
  def user_options()
    puts "
    ----------
    Please choose one of the following options:
    1) Check Balance
    2) Make a Withdrawal
    3) Make a Deposit
    4) Exit
    ----------"
    answer = Integer(gets.chomp)
    if answer == 1
      display_balance()
    elsif answer == 2
      withdraw()
    elsif answer == 3
      deposit()
    elsif answer == 4
      return
    else
      user_options()
    end
  end





  public
  def check_pin()
    print "Input PIN: "
    entered_pin = Integer(gets.chomp)
    if entered_pin == @pin
      puts "Access Granted"
      return true
    else pin_error()
    end
  end

  public
  def display_balance()
  if check_pin() == true
    puts "Current Balance: $#{@balance}."
  else puts pin_error
  end
  user_options()
  end

  public
  def withdraw()
    if check_pin() == true
      puts "How much would you like to withdraw?"
      amount = Integer(gets.chomp)
      if amount > balance
        puts "Insufficient Funds for Requested Amount. 
        Overdraft Protection enabled. 
        Current Balance: $#{balance}.
        Additional Funds required for Transaction: $#{amount - balance}."  
      else @balance = balance - amount
        puts "Withdrew $#{amount}. New balance: $#{balance}"
      end
    else pin_error()
    end
    user_options()
  end

  public
  def deposit(pin_number, amount)
  if @pin_number == @pin 
    @balance = balance + amount
    puts "Deposited $#{amount}. New balance: $#{balance}"
    else puts pin_error
  end
  user_options()
  end
end

checking_account = Account.new(200)
#checking_account.display_balance()
