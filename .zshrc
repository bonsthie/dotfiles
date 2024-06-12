export EDITOR=vim
export ZSH="$HOME/.oh-my-zsh"
export PATH="/usr/local/bin:$PATH"
export PATH=".local/bin:$PATH"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"


# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh
# Environment Variables
export TERMINAL=alacritty
export EDITOR=nvim
export BROWSER=brave

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8


#custom arch
alias x='startx'
alias inter='sh ~/tool/internet.sh'
alias pipes="sh ~/apk/pipes.sh/pipes.sh"
alias nm='watch nmcli d'
alias shut='shutdown now'
alias battery="acpi"

# Aliases
alias vim="nvim"
alias vi="vim ."
alias pingg='ping google.com'
alias c='clear'
alias cat=bat

#ls
alias ll='ls -l'
alias la='ls -A'
alias lla='ls -la'
alias l='ls -CF'

#git
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gd='git diff'
alias gl='git log'

export XSECURELOCK_SAVER=saver_xscreensaver
export XSECURELOCK_SHOW_DATETIME=1
export XSECURELOCK_DATETIME_FORMAT="%Y-%m-%d %H:%M:%S"
export XSECURELOCK_PASSWORD_PROMPT=asterisks
alias lock="xlock"

tm() {
    if [[ -n "$TMUX" ]]; then
        # If inside a tmux session, just use the original tmux command
        command tmux "$@"
    elif [[ "$#" -eq 0 ]]; then
        command tmux new-session -s "${PWD##*/}"
    elif [[ "$#" -eq 1 && "$1" != -* ]]; then
        command tmux new-session -s "$1"
    else
        command tmux "$@"
    fi
}

fzf-tmux-session() {
    local session
    session=$(tmux list-sessions -F "#{session_name}" | fzf)
    
    if [ ! -z "$session" ]; then
        tmux attach -t "$session"
    fi
}
alias ts='fzf-tmux-session'


gcc() {
    # Initialize gdb_flag variable
    local gdb_flag=""
    local output_name=""
    local files=()

    # Loop through arguments
    for arg in "$@"; do
        if [[ "$arg" == "-g" ]]; then
            gdb_flag="-g" # Set gdb_flag if -g is found
        elif [[ "$arg" == *".c" && -z "$output_name" ]]; then
            output_name="${arg%.*}" # Set output_name if it's a .c file and output_name is empty
            files+=("$arg") # Add the file to the array of files
        else
            files+=("$arg") # Add the file to the array of files
        fi
    done

    # If output_name is empty but files are not, use the first file's name
    if [[ -z "$output_name" && "${#files[@]}" -gt 0 ]]; then
        output_name="${files[0]%.*}"
    fi

    # If output_name is still empty, print an error message and return
    if [[ -z "$output_name" ]]; then
        echo "Error: No .c file provided for output name."
        return 1
    fi

    # Call gcc with all arguments
    command gcc $gdb_flag "${files[@]}" -o "$output_name"
}


function cdd() {
    # Use fzf to select a file and get its directory name
    local dir_path="$(dirname "$(find . -type f | fzf)")"
    
    # Exit if no file (and thus no directory) was selected
    if [[ -z "$dir_path" ]]; then
        echo "No file selected."
        return
    fi

    # Get the absolute path if not already
    dir_path=$(realpath "$dir_path")

    # Use the name of the directory as the session name
    local session_name="$(basename "$dir_path")"

    # Create or re-attach to a tmux session with the name of the directory
    if tmux has-session -t "$session_name" 2>/dev/null; then
        echo "Reattaching to existing session named $session_name"
        tmux attach -t "$session_name"
    else
        echo "Creating new tmux session named $session_name"
        tmux new-session -d -s "$session_name" -c "$dir_path"
        tmux attach -t "$session_name"
    fi
}

function mkcd() {
  mkdir -p "$1" && cd "$1"
}
alias mkcd=mkcd

function gclb(){
	git clone git@github.com:bonsthie/"$1".git
}
